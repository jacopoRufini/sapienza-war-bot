const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8080
const app = express()

let votedIp = [];
let armies = new Map();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// starting ownership data
const currentOwnership = Object.assign({}, require("./defaultLocations"));

// init armies ( 50 start soldiers )
for (let key of Object.keys(currentOwnership))
    armies.set(key, 50);

// route for data
app.get("/owners", (req, res) => res.send(currentOwnership))

app.post("/vote", (req, res) => {
  let clientIp = req.connection.remoteAddress;
  if (!votedIp.includes(clientIp)) {
    votedIp.push(clientIp);
    const dep = req.body.dep;
    armies.set(dep, armies.get(dep) + 1);
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
