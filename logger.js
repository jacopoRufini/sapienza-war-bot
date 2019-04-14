let logs = []

// log a message
module.exports.log = function (string) {
	logs.push(string)
}

// empty the logs
module.exports.reset = function () {
	logs = []
}

// return copy of logs array
module.exports.getLogs = function () {
	return logs.slice()
}