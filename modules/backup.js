const fs = require('fs');
const Logger = require('./logger');
const Factions = require("./factions")
const dir = './backup/'

function deleteOldest(){
  fs.readdir(dir, (err, files) => {
    if (files.length >= 30){
      fs.unlinkSync(dir + files[0]);
    }
  });
}

// save backup
module.exports.saveBackup = function() {
  deleteOldest();
  const object = Factions.getData();
  object['logs'] = Logger.getLogs();
  fs.writeFile(dir + new Date().toString() + '.json', JSON.stringify(object, null, 2), (err) => {});
}

// load backup
module.exports.loadBackup = function(callback) {
  let obj;
  fs.readdir(dir, (err, files) => {
    console.log("Backup ripristinato -> " + files[files.length-1])
    obj = JSON.parse(read(dir + files[files.length-1]));
    Factions.setData(obj.factions, obj.departments, obj.adjacents);
    Logger.setLogs(obj.logs);
    callback();
  });
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
