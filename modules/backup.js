const fs = require('fs');
const folder = 'backup';
const Logger = require('./logger');
const Factions = require("./factions")
const dir = './backup/'

const BACKUP = dir + 'backup.json'; /* inserire project path in caso di restore backup */

// save backup
module.exports.saveBackup = function() {
  const object = Factions.getData();
  object['logs'] = Logger.getLogs();
  fs.writeFile(BACKUP, JSON.stringify(object, null, 2), (err) => {});
}

// load backup
module.exports.loadBackup = function() {
  let obj = JSON.parse(read(BACKUP));
  Factions.setData(obj.factions, obj.departments, obj.adjacents);
  Logger.setLogs(obj.logs);
}

function read(file) {
  let content;
  try {
    content = fs.readFileSync(file, "utf8");
  } catch(e) {
    console.log(e);
  }
  return content;
}
