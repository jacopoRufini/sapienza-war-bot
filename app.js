const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('./logger');

const PORT = 8080;
const DEFAULT_MARKS = 50;
const app = express()

let votedIp = {};
let owners = {}; // mappa ridondate ma più comoda / efficiente per l'update

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// starting ownership data
const ownership = require("./defaultLocations");

// map of owners
for (let key in ownership) {
  const owner = ownership[key].owner;
  owners[owner.name] = owner;
}

// routes for data
app.get("/ownership", (req, res) => res.send(ownership));
// get war history
app.get("/logs", (req, res) => res.send(Logger.getLogs()));
// get owner objects
app.get("/owners", (req, res) => res.send(owners));

app.post("/vote", (req, res) => {
  let clientIp = req.connection.remoteAddress;
  const owner = req.body.owner;
  if(votedIp[clientIp])
    res.status(401 /* Not Authorized */).send("non puoi votare in questo momento, hai già votato");
  else if(owner != "nessuno" && owners[owner]) {
    votedIp[clientIp] = true;
    owners[owner].marks++;
    res.send("voto aggiunto con successo");
  } else {
    res.status(400 /* Bad Request */).send("la fazione non esiste");
  }
});

const server = app.listen(PORT, () => {
	// on server start
	console.log("server listening on localhost:" + PORT);
});

const randomElement = array => array[Math.floor(Math.random() * array.length)];
// cambiamo l'ownership a caso per divertimento
setInterval(() => {
  let departments = Object.keys(ownership)
  let depAtt = randomElement(departments)
  let attacker = ownership[depAtt]
  let depDef = randomElement(attacker.adjacents)
  let defender = ownership[depDef]
  if (defender.owner === attacker.owner || attacker.owner.name === "nessuno")
    return;
  //console.log(attacker.owner.name + " hanno attaccato il dipartimento di "+ depDef + " presidiato da " + defender.owner.name);
  const attWin = Math.random() <= attackWinProb(attacker.owner.marks + DEFAULT_MARKS, defender.owner.marks + DEFAULT_MARKS);
  if (attWin) {
    attacker.owner.marks += 5;
    ownership[depDef].owner = attacker.owner;
    Logger.log(attacker.owner.name + " hanno CONQUISTATO il dipartimento di " + depDef);
  } else {
    // DO NOTHING
  }//console.log(defender.owner.name + " hanno DIFESO il dipartimento di " + depDef);
}, 1);

function attackWinProb(attVoti, defVoti){
  let perc = (attVoti - defVoti) * 2; // % da aggiungere a 0.5
  return 0.5 + (0.5 * (perc/100));
  //esempio: att = 52, def = 50, la % è 52-50 = 2*2 = 4, cioè il 4% in più di vincita
  // 0.5 + 0.5 * 0.04 = 0.52
}
