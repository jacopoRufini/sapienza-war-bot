const container = document.getElementById("map-container")
let svg = container.getSVGDocument()
const adjacents = {};
let selectedOwner = null
let departments = null

if(svg) { // firefox
    onSvgReady()
} else { // chrome
    container.addEventListener("load", () => {
        svg = container.getSVGDocument()
        onSvgReady()
    })
}

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
      console.log(res.data);
    })
    .catch(err => {
      if(err.response && err.response.data) // already voted or faction doesn't exist
        console.log(err.response.data) // error message from the server
      else if(err.response) // other error from server 
        console.log(err.response)
      else // unkown error (probably from js in this function)
        console.log(err)
    });
  } else {
    console.log("seleziona una fazione");
  }
}

// called when a svg department has been clicked
// "department" argument is the svg element clicked
function onDeparmentClicked(department) {
  selectedOwner = department.getAttribute("owner");
  console.log(getDepartmentDescription(department));
}

// update data every attack
setInterval(() => {
  axios.get('/owners')
  .then(response => updateDepartments(response.data))
  .catch(error => console.log(error))
},5000)

// called on initialization
function onSvgReady() {
    // initialize departments
    departments = svg.getElementsByClassName("department")
    // load owners data
    axios.get('/owners')
    .then(response => updateDepartments(response.data))
    .catch(error => console.log(error))
    // set on click handler on deps
    for (let department of departments)
      department.onclick = event => onDeparmentClicked(event.target)
}
