const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('./logger');
const Backup = require('./backup');
const Factions = require("./factions")

const PORT = process.env.PORT || 8080;
ATTACK_INTERVAL = 1000 /* 1 sec */ * 60 /* min */;
const app = express();

let votedIp = {};
let owners = {}; // mappa ridondate ma più comoda / efficiente per l'update

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes for data
app.get("/data", (req, res) => res.send(Factions.getData()));
// get war history
app.get("/logs", (req, res) => res.send(Logger.getLogs()));
// post vote for a faction
app.post("/vote", (req, res) => {
  const clientIp = req.connection.remoteAddress;
  const faction = req.body.faction;
  
  if(votedIp[clientIp]) {
    res.status(401 /* Not Authorized */).send("non puoi votare in questo momento, hai già votato");
  } else if(Factions.addVotes(faction)) {
    votedIp[clientIp] = true;
    res.send("voto aggiunto con successo");
  } else {
    res.status(400 /* Bad Request */).send("la fazione non esiste");
  }
});

// on server start
const server = app.listen(PORT, () => {
	console.log("server listening on localhost:" + PORT);
});
 /*function attackWinProb(attVoti, defVoti){
  const perc = (attVoti - defVoti) * 2; // % da aggiungere a 0.5
  return 0.5 + (0.5 * (perc/100));
  } */
  // la funzione era scritta come: 0.5 + 0.5 * 2 * ((voti_attacco + 50 - (voti_difesa + 50))/ 100)
  // la seguente e' equivalente
const doAttack = (attacker /* name */, departmentAttacked /* name */) => {
  const defender /* name */ = Factions.getOwner(departmentAttacked);
  if(attacker === defender || attacker === "nessuno")
    return;
 
   const hasAttackerWon = Math.random() <= (0.5 + (Factions.getVotes(attacker) - Factions.getVotes(defender)) / 100);
   if (hasAttackerWon) {
     Factions.addVotes(attacker, 5)
     Factions.setOwner(departmentAttacked, attacker)
     Logger.log(attacker + " hanno CONQUISTATO il dipartimento di " + departmentAttacked);
   }
}

const randomElement = array => array[Math.floor(Math.random() * array.length)];

// attack interval
// NOTA: il dipartimento a caso ha probabilita' maggiore di appartenere ad una fazione con molti dipartimenti,
// se si prende direttamente una fazione a caso allora la probilita di una fazione di essere scelta e' equa
setInterval(() => {
  let attackingDepartment = randomElement(Factions.getDepartmentsList());
  let defendingDepartment = randomElement(Factions.getDepartmentAdjacents(attackingDepartment));
  let attackingFaction = Factions.getOwner(attackingDepartment);
  doAttack(attackingFaction, defendingDepartment)
}, ATTACK_INTERVAL);
// resetta la mappa degli ip ogni ora
setInterval(() => { votedIp = {} }, 1000 * 60 * 60);

Factions.initializeFactionsAndDepartments()




