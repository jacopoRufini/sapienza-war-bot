const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('./logger');
const Backup = require('./backup');
const Factions = require("./factions")

const PORT = process.env.PORT || 8080;
const ATTACK_INTERVAL = 1000 /* 1 sec */ * 10 /* min */;
const DEBUG_ATTACK_INTERVAL = 10;

const app = express();

let users = new Set();
let votedIp = {};
let owners = {};
let lastAttack = Date.now();
let iteration = 0;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes for data
app.get("/data", (req, res) => res.send(Factions.getData()));
// routes countdown
app.get("/countdown", (req, res) => res.send(lastAttack + ""));
// get war history
app.get("/logs", (req, res) => res.send(Logger.getLogs()));
// post vote for a faction
app.post("/vote", (req, res) => {
  const forwarded = req.headers['x-forwarded-for']
  const clientIp = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
  const faction = req.body.faction;
  if(votedIp[clientIp]) {
    res.status(401 /* Not Authorized */).send("Non puoi votare in questo momento, hai già votato.");
  } else if(Factions.addVotes(faction)) {
    votedIp[clientIp] = true;
    res.send("Voto per " + faction + " aggiunto con successo.");
  } else {
    res.status(400 /* Bad Request */).send("La fazione non esiste.");
  }
});
// on server start
const server = app.listen(PORT, () => {
	console.log("server listening on localhost:" + PORT);
});
const doAttack = (attackingDepartment /* name */, defendingDepartment /* name */) => {
  const attacker = Factions.getOwner(attackingDepartment);
  const defender /* name */ = Factions.getOwner(defendingDepartment);
  if(attacker === defender || attacker === "nessuno") {
    return;
  }
   const hasAttackerWon = (Math.random() <= (0.5 + (Factions.getVotes(attacker) - Factions.getVotes(defender)) / 100));
   if (hasAttackerWon || defender === "nessuno") {
     Factions.addBonus(attacker);
     Factions.setOwner(defendingDepartment, attacker)
     Logger.log("#"+iteration++ + " " + attacker + " hanno CONQUISTATO il dipartimento di " + defendingDepartment + " " + Factions.getCustomText(attacker));
     if (iteration % 24 == 0) {
       Factions.clearBonuses();
     }
   }
   else Logger.log("#"+iteration++ + " " + defender + " hanno DIFESO il dipartimento di " + defendingDepartment + " da " + attacker);
}

// attack interval
setInterval(() => {
  lastAttack = Date.now();
  const candidates =  Factions.getAttackerDefender();
  if (!candidates) {
    return;
  }
  const attackingDepartment = candidates.attacker;
  const defendingDepartment = candidates.defender;
  doAttack(attackingDepartment, defendingDepartment)
}, ATTACK_INTERVAL);

/* ogni 24 ore:
- resetta la mappa degli ip
- ogni fazione perde il proprio bonus */
setInterval(() => {
  for (let ip in votedIp)
    users.add(ip);
  votedIp = {};
  Factions.clearBonuses();
}, 1000 * 60 * 60 * 24);
// wake up heroku app
const http = require("http");

setInterval(function() {
  let hour = ((new Date()).getHours() + 2) % 24 // server e' 2 ore indietro
  // non sprecare le ore dei dyno di notte
  if(hour >= 8 && hour < 22)
    http.get("http://sapienza-warbot.herokuapp.com");
}, 10 * 60 * 1000); // every 10 minutes

Factions.initializeFactionsAndDepartments()
