const container = document.getElementById("map-container")
let svg = container.getSVGDocument()
const adjacents = {};

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
    const departments = svg.getElementsByClassName("department")
    for (let department of departments) {
      const departmentData = data[department.id];
      adjacents[department.id] = departmentData.adjacents;
      setOwner(department, departmentData)
    }
}

let selectedFaction = null

function vote(){
  if (selectedFaction) {
    axios.post('/vote', {'own' : selectedFaction})
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      if(err.response && err.response.status === 401) //NOT  AUTHORIZED code
        console.log(err.response.data)
      else if(err.response) // other error from server 
        console.log(err.response)
      else // unkown error (probably from js in this function)
        console.log(err)
    });
  } else {
    console.log("seleziona un dipartimento");
  }
}

// update data every attack
setInterval(() => {
  axios.get('/owners')
  .then(response => updateDepartments(response.data))
  .catch(error => console.log(error))
},5000)

function onSvgReady() {
    // load owners data
    axios.get('/owners')
    .then(response => updateDepartments(response.data))
    .catch(error => console.log(error))
    // set on click handler on deps
    var departments = svg.getElementsByClassName("department")
    for (var i = departments.length - 1; i >= 0; i--) {
        let d = departments[i]
        d.addEventListener("click", event => {
            selectedFaction = event.target.getAttribute("owner");
            console.log(getDepartmentDescription(event.target));
        })
    }
}
