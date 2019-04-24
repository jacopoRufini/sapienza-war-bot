const fs = require('fs');
const folder = 'backup';
const Logger = require('./logger');
const Factions = require("./factions")
const dir = './backup/'

const BACKUP = dir + 'Tue Apr 23 2019 12:27:34 GMT+0200 (Central European Summer Time)'; /* inserire project path in caso di restore backup */

function deleteOldest(){
  fs.readdir(folder, (err, files) => {
    if (files.length >= 3){
      fs.unlinkSync(dir + files[0]);
    }
  });
}

// save backup
module.exports.saveBackup = function() {
  deleteOldest();
  const object = Factions.getData();
  object['logs'] = Logger.getLogs();
  let date = new Date();
  fs.writeFile(dir + date, JSON.stringify(object, null, 2), (err) => {});
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
