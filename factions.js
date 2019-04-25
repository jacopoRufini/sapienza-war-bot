// factions data
let factions = {/* name: {color: String, votes: String} */}, departments = {/* name: faction */}, adjacents = {};

module.exports.initializeFactionsAndDepartments = function () {
	let defaultData = require("./defaultLocations")
	for (let department in defaultData) {
		let faction = defaultData[department].faction
		if(!factions[faction.name]) {
			factions[faction.name] = {
				color: faction.color,
				votes: faction.votes,
        bonus: faction.bonus,
        attackText: faction.attackText
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

module.exports.addVotes = function(factionName) {
	if(!factions[factionName])
		return false
	factions[factionName].votes++;
	return true
}

module.exports.addBonus = function(factionName) {
	factions[factionName].bonus += 2;
}

module.exports.clearBonuses = function() {
	for (let faction in factions) {
    faction.bonus = 0;
  }
}

module.exports.getVotes = function(factionName) {
  const faction = factions[factionName];
	return faction.votes + faction.bonus;
}

module.exports.getData = function() {
	return {factions: factions, departments: departments, adjacents: adjacents}
}


module.exports.setData = function(fac, dep, adj) {
	factions = fac;
	departments = dep;
	adjacents = adj;
}

module.exports.getDepartmentsList = function() {
	return Object.keys(departments)
}

module.exports.getDepartmentAdjacents = function(department) {
	return adjacents[department]
}

module.exports.getCustomText = function(factionName) {
  return factions[factionName].attackText;
}

module.exports.getRandomAttack = function() { // ci mette meno di 1ms
  let couples = [];
  for(let dep1 in adjacents) {
    let owner1 = this.getOwner(dep1);
    if(owner1 !== "nessuno")
      for(let dep2 of adjacents[dep1])
        if(owner1 !== this.getOwner(dep2))
          couples.push({attacker: dep1, defender: dep2});
  }
  return couples[Math.floor(Math.random() * couples.length)];
}
