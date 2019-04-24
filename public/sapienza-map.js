let svg, departmentsSvg, selectedDepartment;

function getDepartmentDescription(departmentNode) {
    return departmentNode.id + " posseduto da " + departmentNode.getAttribute("faction");
}

function updateDepartments() {
	for (var i = departmentsSvg.length - 1; i >= 0; i--) {
		let departmentSvg = departmentsSvg[i],
			departmentName = departmentSvg.id,
			faction = getDepartmentOwner(departmentName);

		departmentSvg.setAttribute("faction", faction);
    	departmentSvg.style.fill = getFactionColor(faction);
	}
  updateRanking()
  if(selectedDepartment)
    showDepartmentStats(selectedDepartment)
}

function vote() {
  const faction = selectedDepartment.getAttribute("faction");
  if (faction && faction != "nessuno") {
    axios.post('/vote', {'faction' : faction})
    .then(res => {
      successToast(res.data);
      factions[faction].votes++;
      updateRanking()
      showDepartmentStats(selectedDepartment);
    })
    .catch(err => {
      if(err.response && err.response.data) // already voted or faction doesn't exist
        errorToast(err.response.data); // error message from the server
      console.log(err);
    });
  } else {
    console.log("seleziona una fazione");
  }
}

// called when a svg department has been clicked
// "department" argument is the svg element clicked
function onDepartmentClicked(department) {
  makeSelected(department);
  showDepartmentStats(department);
  infoToast(getDepartmentDescription(department));
}

const getById = id => document.getElementById(id)

// show stats on of department
function showDepartmentStats(departmentSvg){
  const department = departmentSvg.id
  const faction = departmentSvg.getAttribute("faction");
  const isNessuno = faction === "nessuno"
  getById("stat-department").innerHTML = department
  getById("stat-faction").innerHTML = isNessuno && "Nessuna" || faction
  getById("stat-votes").innerHTML = isNessuno && "-" || getFactionVotes(faction)
  getById("stat-color").style.backgroundColor = getFactionColor(faction)
  getById("vote-btn").innerHTML = "Vota " + faction
  getById("vote-btn").style.display = isNessuno && "none" || "block"
}

// adds a "strong" border to the element clicked
// saves the selected department to show some stats
// "department" argument is the svg element clicked
function makeSelected(department) {
  if (selectedDepartment) selectedDepartment.classList.remove("highlight");
  selectedDepartment = department;
  selectedDepartment.classList.add("highlight");
}

//  -----------------  LOGS START -----------------

// add log message, feel free to change the HTML of the logger
function addLogMessage(message) {
  let messageNode = document.createElement("div");
  messageNode.innerHTML = "- " + message;
  let logs = document.getElementById("logs");
  // append as first child
  logs.insertBefore(messageNode, logs.firstChild);
}

function resetLogs() {
  document.getElementById("logs").innerHTML = "";
}

function synchronizeLogs() {
  axios.get('/logs')
  .then(response => {
    let logs = response.data;
    resetLogs();
    for(let log of logs)
      addLogMessage(log);
  })
  .catch(error => console.log(error));
}

//  ----------------- LOGS END -----------------
//  ----------------- TOAST START -----------------

// show a message info
// type should be "info", "error" or "success"
// feel free to change options and colors, check options at https://github.com/apvarun/toastify-js
function toast(type, message) {
  let types = {
    info: "background:linear-gradient(135deg,#73a5ff,#5477f5)",
    success: "linear-gradient(to right, #00b09b, #96c93d)",
    error: "red"
  }
  Toastify({
    text: message,
    backgroundColor: types[type],
  }).showToast();
}

function errorToast(message) { toast("error", message)}
function infoToast(message) { }//toast("info", message)}
function successToast(message) { toast("success", message)}

//  ----------------- TOAST END -----------------
//  ----------------- RANKING START -----------------
const RANKIN_LENGTH = 5; // numero di fazioni messe nella table ranking
let factionsDepartments = {}
function updateRanking() {
	let factionsByRank = getFactionsByDepartments().slice(0, RANKIN_LENGTH)
	let ranking =  document.getElementById("ranking")
	ranking.innerHTML = "<tr><th>Fazione</th><th>Dip</th><th>Voti</th></tr>"
	ranking.innerHTML += factionsByRank.map(entry => `<tr onmouseenter="onHighlightStart(event.target.firstChild.innerText)" onmouseout="onHighlightEnd()"><td>${entry.faction}</td><td>${entry.departments.length}</td><td>${entry.votes}</td></tr>`).join('')
}
//  ----------------- RANKING END -----------------
//  ----------------- HIGHLIGHT START -----------------
// highlight faction's territories
function onHighlightStart(faction) {
	// nel caso non triggeri onHighlightEnd correttamente
	onHighlightEnd()
	for (var i = departmentsSvg.length - 1; i >= 0; i--) {
		let d = departmentsSvg[i]
		if(d.getAttribute("faction") === faction)
			d.classList.add("highlight")
	}
}
// reset highlight
function onHighlightEnd() {
	let highlighted = svg.getElementsByClassName("highlight")
	for (var i = highlighted.length - 1; i >= 0; i--)
		highlighted[i].classList.remove("highlight")
}
//  ----------------- HIGHLIGHT END -----------------
//  ----------------- COUNTDOWN START ----------------
// aggiorna ricorsivamente il contatore HTML ogni secondo
function setCountdown(timeLeftMillis) {
  if(timeLeftMillis < 0)
    timeLeftMillis = 0;
  getById("countdown").innerHTML = "Prossimo Attacco in " + msToTime(timeLeftMillis);
  if(timeLeftMillis > 0)
    setTimeout(() => setCountdown(timeLeftMillis - 1000), 1000);
}

function msToTime(millis) {
  const seconds = Math.floor( millis /  1000),
        minutes = Math.floor((millis / (1000 * 60)) % 60),
        hours   = Math.floor( millis / (1000 * 60 * 60));
  // aggiungi uno zero se c'e' un solo carattere
  const padWithZero = str => ("0" + str).slice(-2)
  // mappa numeri a stringhe di 2 caratteri, poi concatena separando con ':' 
  return [hours, minutes, seconds].map(n => padWithZero(n)).join(":");
}
//  ----------------- COUNTDOWN END ----------------
// tempo di ritardo per richiesta di aggiornamento (per essere sicuri che l'aggiornamento nel server sia gia' avvenuto)
// E' un valore casuale cosi' che le richieste si distribuiscano in modo da minimizzare la congestione (non serve a un cazzo)
const UPDATE_OFFSET = (Math.random() * 3 + 2) * 1000 /* 2-5 sec */
// syncronizza in loop lo stato e la view con il server
function update() {
  synchronizeLogs()
  // calls updateDepartments when factions data is ready
  loadData(updateDepartments)
  // schedule next update
  axios.get('/countdown')
  .then(response => {
    // ritardiamo l'update di 10 secondi cosi' che non vada a vuoto
    let nextUpdateMillis = parseInt(response.data) + UPDATE_OFFSET
    // aggiorniamo la view del contatore
    setCountdown(nextUpdateMillis)
    // aggiorniamo allo scadere del countdown
    // se il tempo rimasto e' negativo c'e' probabilmente un errore o non ci sono adiacenti per combattere
    if(nextUpdateMillis >= 0)
      setTimeout(update, nextUpdateMillis)
  })
  .catch(error => console.log(error));
}

// called on svg initialization
function onSvgReady() {
  // initialize svg
  svg = document.getElementById("map-container").getSVGDocument()
  // initialize departmentsSvg
  departmentsSvg = svg.getElementsByClassName("department")
    // load logs
	update()
	// set on click handler on deps
  for (let department of departmentsSvg)
    department.onclick = event => onDepartmentClicked(event.target)
}
