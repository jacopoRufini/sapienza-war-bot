const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('./logger');
const Backup = require('./backup');
const Factions = require("./factions")

const PORT = process.env.PORT || 8080;
const ATTACK_INTERVAL = 1000 * 60 /* 60 sec */;

const app = express();

let visitors = new Set();
let votedIp = {};
let owners = {};
let lastAttackTime = Date.now();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes for data
app.get("/data", (req, res) => res.send(Factions.getData()));
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
  const clientIp = req.connection.remoteAddress;
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
Factions.initializeFactionsAndDepartments()

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

/* OGNI 24 ORE:
- resetta la mappa degli ip
- ogni fazione perde il proprio bonus */
setInterval(() => {
  for (let ip in votedIp)
    visitors.add(ip);
  votedIp = {};
  Faction.clearBonuses();
}, 1000 * 60 * 60 * 24);
