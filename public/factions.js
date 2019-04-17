let factions = null, departments = null,  onFactionsLoad = null;

function loadData() {
	axios.get('/data')
	.then(response => {
		factions = response.data.factions
		departments = response.data.departments
		updateFactions()
		if(onFactionsLoad)
			onFactionsLoad()
	})
	.catch(error => console.log(error))
}

function updateFactions() {
	for(let faction in factions) {
		factions[faction].faction = faction
		factions[faction].departments = []
	}
	for(let department in departments)
		factions[getDepartmentOwner(department)].departments.push(department)
}

function getFactionsByDepartments() {
	return Object.keys(factions).filter(k => k !== "nessuno").map(key => factions[key]).sort((a, b) => b.departments.length - a.departments.length)
}

function getFactionsByVotes() {
	return  Object.keys(factions).filter(k => k !== "nessuno").map(key => factions[key]).sort((a, b) => b.votes - a.votes)
}

function getDepartmentOwner(departmentName) {
	return departments[departmentName]
}

function getFactionColor(factionName) {
	return factions[factionName].color
}

function getFactionVotes(factionName) {
	return factions[factionName].votes
}