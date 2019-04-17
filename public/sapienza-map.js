let svg, departments, selection, owners;
const adjacents = {};

function setOwner(department, departmentData) {
    department.setAttribute("owner", departmentData.owner.name);
    department.style.fill = departmentData.owner.color;
}

function getDepartmentDescription(departmentNode) {
    return departmentNode.id + " posseduto da " + departmentNode.getAttribute("owner");
}

function updateDepartments(data) {
    for (let department of departments) {
      const departmentData = data[department.id];
      adjacents[department.id] = departmentData.adjacents;
      setOwner(department, departmentData)
    }
    updateRanking()
}

function vote(){
  const owner = selection.getAttribute("owner");
  if (owner && owner != "nessuno") {
    axios.post('/vote', {'owner' : owner})
    .then(res => {
      successToast(res.data);
      owners[owner].marks++;
      showStats(selection);
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
  showStats(department);
  infoToast(getDepartmentDescription(department));
}

// show stats on user click
function showStats(department){
  const ownerName = department.getAttribute("owner");
  const owner = owners[ownerName];
  console.log(owner);
  document.getElementById("statsInfo").innerHTML =
  "DIPARTIMENTO: <br>" +
  "FAZIONE: <br>" +
  "VOTAZIONI: <br>" +
  "COLORE: <br>";
  document.getElementById("statsData").innerHTML =
  department.id + "<br>" +
  owner.name + "<br>" +
  owner.marks + "<br>" +
  "<div style='margin-top: 10px; width: 10px; height: 10px; background: "+owner.color+";'></div>";
  document.getElementById("vote").innerHTML =
  "<button class='btn btn-success btn-custom' onclick='vote()'>Vota "+owner.name+"</button>";
}

// adds a "strong" border to the element clicked
// saves the selected department to show some stats
// "department" argument is the svg element clicked
function makeSelected(department) {
  if (selection) selection.classList.remove("selection");
  selection = department;
  selection.classList.add("selection");
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
const RANKIN_LENGTH = 7; // numero di fazioni messe nella table ranking
let factionsDepartments = {}
function updateRanking() {
	// associa alle fazioni il totale dei dipartimenti posseduti
	factionsDepartments = {}
	for (let department of departments) {
		let faction = department.getAttribute("owner")
		if(faction != "nessuno") {
			if(!factionsDepartments[faction]) 
				factionsDepartments[faction] = [department.id]
			else
				factionsDepartments[faction].push(department.id)
		}
	}
	// mappa in array di oggetti {faction: String, departments: Number}
	// dove uno e' il nome della fazione, l'altro il numero dei territori
	let factionsByRank =
		Object.keys(factionsDepartments)
		.map(faction => ({
			faction: faction,
			departments: factionsDepartments[faction].length,
			voti: owners[faction].marks
		}))
	// ordina l'array verso decrescente
	factionsByRank.sort((a, b) => b.departments - a.departments)
	// prendi solo i primi RANKIN_LENGTH fazioni
	factionsByRank = factionsByRank.slice(0, RANKIN_LENGTH)
	// aggiorna table HTML
	let ranking =  document.getElementById("ranking")
	ranking.innerHTML = "<tr><th>Fazione</th><th>Dip</th><th>Voti</th></tr>"
	ranking.innerHTML += factionsByRank.map(entry => `<tr onmouseenter="onHighlightStart(event.target.firstChild.innerText)" onmouseout="onHighlightEnd()"><td>${entry.faction}</td><td>${entry.departments}</td><td>${entry.voti}</td></tr>`).join('')
}
//  ----------------- RANKING END -----------------
//  ----------------- HIGHLIGHT START -----------------
// highlight faction's territories
function onHighlightStart(faction) {
	// nel caso non triggeri onHighlightEnd correttamente
	onHighlightEnd()
	let departments = factionsDepartments[faction]
	if(departments)
		for (let department of departments)
			svg.getElementById(department).classList.add("highlight")
}
// reset highlight
function onHighlightEnd() {
	let highlighted = svg.getElementsByClassName("highlight")
	for (var i = highlighted.length - 1; i >= 0; i--)
		highlighted[i].classList.remove("highlight")
}
//  ----------------- HIGHLIGHT END -----------------
// update data every attack
setInterval(() => {
  axios.get('/ownership')
  .then(response => updateDepartments(response.data))
  .catch(error => console.log(error))

  synchronizeLogs()
},1000)

// called on initialization
function onSvgReady() {
    // initialize svg
    svg = document.getElementById("map-container").getSVGDocument()
    // initialize departments
    departments = svg.getElementsByClassName("department")
    // load logs
    synchronizeLogs()
    // load owners data
    axios.get('/owners')
    .then(response => owners = response.data)
    .catch(error => console.log(error))
    // load ownership data
    axios.get('/ownership')
    .then(response => updateDepartments(response.data))
    .catch(error => console.log(error))
    // set on click handler on deps
    for (let department of departments)
      department.onclick = event => onDepartmentClicked(event.target)
}
