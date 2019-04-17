// factions data
let factions = {/* name: {color: String, votes: String} */}, departments = {/* name: faction */}, adjacents = {};

module.exports.initializeFactionsAndDepartments = function () {
	let defaultData = require("./defaultLocations")
	for (let department in defaultData) {
		let faction = defaultData[department].faction
		if(!factions[faction.name]) {
			factions[faction.name] = {
				color: faction.color,
				votes: faction.marks
			}
		}
		adjacents[department] = defaultData[department].adjacents
		departments[department] = faction.name
	}
}

module.exports.setOwner = function(departmentName, newOwnerName) {
	departments[departmentName] = newOwnerName
}

module.exports.getOwner = function(departmentName) {
	return departments[departmentName]
}

module.exports.addVotes = function(factionName, votes = 1) {
	if(!factions[factionName])
		return false
	factions[factionName].votes += votes
	return true
}

module.exports.getVotes = function(factionName) {
	return factions[factionName].votes
}

module.exports.getData = function() {
	return {factions: factions, departments: departments}
}

module.exports.getDepartmentsList = function() {
	return Object.keys(departments)
}

module.exports.getDepartmentAdjacents = function(department) {
	return adjacents[department]
}