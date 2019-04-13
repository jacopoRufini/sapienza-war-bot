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
    department.setAttribute("owner", departmentData.owner);
    department.style.fill = departmentData.color
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
            console.log(getDepartmentDescription(event.target))
        })
    }
}
