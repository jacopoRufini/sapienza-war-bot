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
const currentOwnership = Object.assign({}, require("./defaultLocations"));

// map of owners
for (let key of Object.keys(currentOwnership)) {
    const own = currentOwnership[key].owner;
    if (!owners.has(own.name))
      owners.set(own.name, own);
  }

// routes for data
app.get("/owners", (req, res) => res.send(currentOwnership))

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
	let dipartimenti = Object.keys(currentOwnership)
	let dipartimentoVincitore = randomElement(dipartimenti),
		dipartimentoPerdente = randomElement(dipartimenti),
		fazioneVincente = currentOwnership[dipartimentoVincitore],
		fazionePerdente = currentOwnership[dipartimentoPerdente];
	if(fazioneVincente != fazionePerdente) {
		console.log(fazioneVincente + " hanno conquistato " + dipartimentoPerdente
					+ " sottraendone il possesso da " + fazionePerdente
					+ " dopo aver lanciato l'attaccato da " + dipartimentoVincitore)
		currentOwnership[dipartimentoPerdente] = fazioneVincente
	}
}, 150000000)
