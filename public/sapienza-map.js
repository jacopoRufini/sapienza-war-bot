let svg = null
const adjacents = {};
let selectedOwner = null
let departments = null

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
  if (selectedOwner && selectedOwner != "nessuno") {
    axios.post('/vote', {'owner' : selectedOwner})
    .then(res => {
      successToast(res.data);
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
  selectedOwner = department.getAttribute("owner");
  infoToast(getDepartmentDescription(department));
}

//  -----------------  LOGS START -----------------

// add log message, feel free to change the HTML of the logger
function addLogMessage(message) {
  let messageNode = document.createElement("LI")
  messageNode.innerHTML = message
  let logs = document.getElementById("logs")
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
function infoToast(message) { toast("info", message)}
function successToast(message) { toast("success", message)}

// update data every attack
setInterval(() => {
  axios.get('/owners')
  .then(response => updateDepartments(response.data))
  .catch(error => console.log(error))

  synchronizeLogs()
},5000)

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
    .then(response => updateDepartments(response.data))
    .catch(error => console.log(error))
    // set on click handler on deps
    for (let department of departments)
      department.onclick = event => onDepartmentClicked(event.target)
}
