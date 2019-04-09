const express = require('express')

const PORT = 8080
const app = express()

app.use(express.static('public'))

// starting ownership
const currentOwnership = Object.assign({}, require("./defaultLocations"));

// route for ownership data
app.get("/owners", (req, res) => res.send(currentOwnership))

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
}, 150)

