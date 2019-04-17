const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('./logger');
const Backup = require('./backup');

const PORT = 8080;
const DEFAULT_MARKS = 50;
const app = express();

let votedIp = {};
let owners = {}; // mappa ridondate ma più comoda / efficiente per l'update

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  const clientIp = req.connection.remoteAddress;
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

// on server start
const server = app.listen(PORT, () => {
	console.log("server listening on localhost:" + PORT);
});

const randomElement = array => array[Math.floor(Math.random() * array.length)];

// attack interval
setInterval(() => {
  const departments = Object.keys(ownership);
  const depAtt = randomElement(departments);
  const attacker = ownership[depAtt];
  const depDef = randomElement(attacker.adjacents);
  const defender = ownership[depDef];
  if (defender.owner === attacker.owner || attacker.owner.name === "nessuno") return;
  const attWin = Math.random() <= attackWinProb(attacker.owner.marks, defender.owner.marks);
  if (attWin) {
    attacker.owner.marks += 5;
    ownership[depDef].owner = attacker.owner;
    Logger.log(attacker.owner.name + " hanno CONQUISTATO il dipartimento di " + depDef);
    //Backup.saveBackup(JSON.stringify(ownership, null, 2), Logger.getLogs());
  } else {
    // DO NOTHING
    //console.log(defender.owner.name + " hanno DIFESO il dipartimento di " + depDef);
  }
}, 1000);

function attackWinProb(attVoti, defVoti){
  const perc = (attVoti - defVoti) * 2; // % da aggiungere a 0.5
  return 0.5 + (0.5 * (perc/100));
}
