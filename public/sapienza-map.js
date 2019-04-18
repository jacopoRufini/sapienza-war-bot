let svg, departmentsSvg, selectedDepartment;
const UPDATE_INTERVAL = 60 * 1000; // 60 seconds;
const DEBUG_UPDATE_INTERVAL = 30;

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
  messageNode.innerHTML = message;
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
function synchronizeCountdown(){
  axios.get('/countdown')
  .then(response => setCountdown(response.data))
  .catch(error => console.log(error));
}

function setCountdown(lastAttack){
  let countdown;
  countdown = UPDATE_INTERVAL - (Date.now() - lastAttack);
  setInterval(() => {
    if (countdown <= 0) countdown = UPDATE_INTERVAL;
    getById("countdown").innerHTML = "Prossimo Attacco in " + msToTime(countdown);
    countdown-= 1000;
  }, 1000);
}

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds;
}
//  ----------------- COUNTDOWN END ----------------

// called on svg initialization
function onSvgReady() {
    // initialize svg
    svg = document.getElementById("map-container").getSVGDocument()
    // initialize departmentsSvg
    departmentsSvg = svg.getElementsByClassName("department")
    // load logs
	synchronizeLogs()
  synchronizeCountdown()
	onFactionsLoad = () => updateDepartments()
	// load factions and departmentsSvg data
	loadData() // calls onFactionsLoad()
    // set on click handler on deps
    for (let department of departmentsSvg)
      department.onclick = event => onDepartmentClicked(event.target)
	// update data every attack
	setInterval(() => {
	  loadData() // calls onFactionsLoad() aka updateDepartments()
	  synchronizeLogs()
	}, UPDATE_INTERVAL)
}
