let svg, departments, selection, owners;
const adjacents = {};

function setOwner(department, departmentData) {
    department.setAttribute("owner", departmentData.owner.name);
    department.style.fill = departmentData.owner.color
}

function getDepartmentDescription(departmentNode) {
    return departmentNode.id + " posseduto da " + departmentNode.getAttribute("owner")
}

function updateDepartments(data) {
    for (let department of departments) {
      const departmentData = data[department.id];
      adjacents[department.id] = departmentData.adjacents;
      setOwner(department, departmentData)
    }
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
        errorToast(err.response.data) // error message from the server
      console.log(err)
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
  document.getElementById("logs").innerHTML = ""
}

function synchronizeLogs() {
  axios.get('/logs')
  .then(response => {
    let logs = response.data
    resetLogs()
    for(let log of logs)
      addLogMessage(log)
  })
  .catch(error => console.log(error))
}

//  ----------------- LOGS END -----------------

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

// update data every attack
setInterval(() => {
  axios.get('/ownership')
  .then(response => updateDepartments(response.data))
  .catch(error => console.log(error))

  synchronizeLogs()
},1)

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
