var svg = null

var container = document.getElementById("map-container")
svg = container.getSVGDocument()

if(svg) { // firefox
    onSvgReady() 
} else { // chrome
    container.addEventListener("load", () => {
        svg = container.getSVGDocument()
        onSvgReady()
    })
}

function setOwner(departmentString, ownerString) {
    const element = svg.getElementById(departmentString)
    element.setAttribute("owner", ownerString)
    element.style.fill = toColor((ownerString || "").hashCode() % MAX_COLOR)
}

function getDepartmentDescription(departmentNode) {
    return  departmentNode.id + " posseduto da " + departmentNode.getAttribute("owner")
}

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0)
    return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash* hash * 71 + hash * 5571;
};

const MAX_COLOR = 0xFFFFFF;

function toColor(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16;
    return "rgba(" + [r, g, b].join(",") + ",1)";
}

function setOwners(ownersDictionary) {
    var departments = svg.getElementsByClassName("department")
    for (var i = departments.length - 1; i >= 0; i--) {
        const departmentId = departments[i].id
        setOwner(departmentId, ownersDictionary[departmentId])
    }
}

function onSvgReady() {
    // load owners data
    axios.get('/owners')
    .then(response => setOwners(response.data))
    .catch(error => console.log(error))
    // set on click handler on deps
    var departments = svg.getElementsByClassName("department")
    for (var i = departments.length - 1; i >= 0; i--) {
        let d = departments[i]
        d.addEventListener("click", event => {
            console.log(event.target.id + " posseduto da " + event.target.getAttribute("owner"))
        })
    }
}
