var svg = null

document
.getElementById("map-container")
.addEventListener("load", function() {
	svg = this.getSVGDocument()
    var departments = svg.getElementsByClassName("department")
    for (var i = departments.length - 1; i >= 0; i--) {
    	let d = departments[i]
    	d.addEventListener("click", event => {
    		console.log(event.target.id)
    	})
    }
});

// ritorna l'ultimo colore settato con setDepartmentColor
// di un edificio dato l'id oppure undefined se non e' mai stato settato
function getDepartmentColor(depId) {
	return svg.getElementById(depId).style.fill
}

// setta il colore di un edificio dato l'id e il nuovo colore
function setDepartmentColor(depId, color) {
	svg.getElementById(depId).style.fill = color
}