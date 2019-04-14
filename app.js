const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8080
const app = express()

let votedIp = [];
let owners = new Map(); // mappa ridondate ma più comoda / efficiente per l'update

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// starting ownership data
const ownership = Object.assign({}, require("./defaultLocations"));

// map of owners
for (let key of Object.keys(ownership)) {
    const own = ownership[key].owner;
    if (!owners.has(own.name))
      owners.set(own.name, own);
  }

// routes for data
app.get("/owners", (req, res) => res.send(ownership))

app.post("/vote", (req, res) => {
  let clientIp = req.connection.remoteAddress;
  if (!votedIp.includes(clientIp)) {
    votedIp.push(clientIp);
    const ownName = req.body.own;
    owners.get(ownName).voti += 1;
    res.send(true);
  } else res.send(false);
});

const server = app.listen(PORT, () => {
	// on server start
	console.log("server listening on localhost:" + PORT + "...")
});

const randomElement = array => array[Math.floor(Math.random() * array.length)]

// cambiamo l'ownership a caso per divertimento
setInterval(() => {
  let departments = Object.keys(ownership)
  let depAtt = randomElement(departments)
  let attacker = ownership[depAtt]
  let depDef = randomElement(attacker.adjacents)
  let defender = ownership[depDef]
  if (defender.owner === attacker.owner) return;
  //console.log(attacker.owner.name + " hanno attaccato il dipartimento di "+ depDef + " presidiato da " + defender.owner.name);
  const attWin = Math.random() <= attackWinProb(attacker.owner.voti, defender.owner.voti);
  if (attWin) {
    ownership[depDef].owner = attacker.owner;
    console.log(attacker.owner.name + " hanno CONQUISTATO il dipartimento di " + depDef);
  } else { }//console.log(defender.owner.name + " hanno DIFESO il dipartimento di " + depDef);
}, 5000)

function attackWinProb(attVoti, defVoti){
  let perc = (attVoti - defVoti) * 2; // % da aggiungere a 0.5
  return 0.5 + 0.5 * (perc/100);
  //esempio: att = 52, def = 50, la % è 52-50 = 2*2 = 4, cioè il 4% in più di vincita
  // 0.5 + 0.5 * 0.04 = 0.52

}
