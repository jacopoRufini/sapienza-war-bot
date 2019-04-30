const express = require('express');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const fs = require('fs');
const Logger = require('./modules/logger');
const Backup = require('./modules/backup');
const Factions = require("./modules/factions")

const debugMode = false;

const PORT = process.env.PORT || 8080;
const ATTACK_INTERVAL = debugMode ? 1000 : 1000 * 60 * 60 // 1 l'ora

const app = express();

let users = new Set();
let votedIp = {};
let owners = {};
let lastAttackTime = Date.now();

const getIp = request => {
  const forwarded = request.headers['x-forwarded-for'];
  const clientIp = forwarded ? forwarded.split(/, /)[0] : request.connection.remoteAddress;
  return clientIp;
}

// rende pubblici i files in client
app.use(express.static('client'));
// permette il listing di backups
app.use('/backups', serveIndex('client/backups', {'icons': true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes for data
app.get("/data", (req, res) => {
  res.send(Factions.getData())
  users.add(getIp(req));
});
// routes countdown
// get info about next attack {attacker: attackingDepartment, defender: defendingDepartment, timeLeft: number}
let nextAttack;

app.get("/next-attack", (req, res) =>
  res.send( Object.assign( // { timeLeft: Number } unione  ( nextAttack o se vuoto {attacker: null, defender: null} )
      { timeLeft: lastAttackTime + ATTACK_INTERVAL - Date.now() },
      nextAttack || {attacker: null, defender: null}
   ) )
);
// get war history
app.get("/logs", (req, res) => res.send(Logger.getLogs()));
// post vote for a faction
app.post("/vote", (req, res) => {
  const clientIp = getIp(req)
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
// check if as voted
app.get("/has-voted", (req, res) => res.send(votedIp[getIp(req)] ? true : false));
// get count of unique ips that voted
app.get("/unique-ips", (req, res) => {
  // aggiorniamo users con votedIp
  for (let ip in votedIp)
    users.add(ip);
  res.send(String(users.size));
});

// on server start
const server = app.listen(PORT, () => {
	console.log("server listening on localhost:" + PORT);
});

function isSingular(sentence) {
  let firstWord = sentence.split(" ")[0];
  return ["A", "E", "O"].some(letter => letter === firstWord[firstWord.length - 1].toUpperCase());
}

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
     Logger.log(attacker + (isSingular(attacker) ? " ha" : " hanno") + " CONQUISTATO il dipartimento di " + defendingDepartment + " " + Factions.getCustomText(attacker));
   }
   else Logger.log(defender + (isSingular(defender) ? " ha" : " hanno") + " DIFESO il dipartimento da " + attacker);
}

// INIZIALIZZA I DATI DELLE FAZIONI
//Factions.initializeFactionsAndDepartments()
Backup.loadBackup();


// ATTACCA FINO A FINIRE I CANDIDATI
nextAttack = Factions.getRandomAttack();

if(nextAttack) {
  let attackInterval = setInterval(() => {
    doAttack(nextAttack.attacker, nextAttack.defender);
    nextAttack = Factions.getRandomAttack();
    if(!nextAttack)
      clearInterval(attackInterval)
    // aggiornamento il tempo alla fine cosi' che il client non perda l'aggiornamento
    // se avvenissero strani interleaving (molto improbabili)
    lastAttackTime = Date.now();
  }, ATTACK_INTERVAL);
} else {
  // abbiamo inizializzato le fazioni per la prima volta e non ci sono fazioni adiacenti
  throw "Non ci sono fazioni nemiche adiacenti all'avvio!"
}

setInterval(() => {
  Backup.saveBackup();
}, 1000 * 45);

/* OGNI 24 ORE:
- resetta la mappa degli ip
- ogni fazione perde il proprio bonus */
setInterval(() => {
  fs.writeFile('client/users.txt', JSON.stringify(Array.from(users)), (err) => {});
  votedIp = {};
}, 1000 * 60 * 60 * 24);

/* DON'T SLEEP - 5 min */
const http = require("http");
setInterval(function() {
    http.get("http://sapienza-warbot.herokuapp.com/");
}, 300000);
