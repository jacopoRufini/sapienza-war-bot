const fs = require('fs');
const folder = './backup';
const Logger = require('./logger');
const Factions = require("./factions")
const MAX_SIZE = 8;

function deleteOldest(){
  fs.readdir(folder, (err, files) => {
    if (files.length >= MAX_SIZE){
      fs.unlinkSync(folder + '/' + files[0]);
    }
  });
}

// save backup
module.exports.saveBackup = function() {
  deleteOldest();
  const object = Factions.getData();
  object['logs'] = Logger.getLogs();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  fs.writeFile(folder + '/' + new Date().toLocaleString(), JSON.stringify(object, null, 2), (err) => {});
}

// load backup
module.exports.loadBackup = function() {
  let backup;
  fs.readdir(folder, (err, files) => {
    backup = folder + '/' + files[files.length-1];
    let obj = JSON.parse(read(backup));
    console.log("Ripristino backup -> " + backup)
    Factions.setData(obj.factions, obj.departments, obj.adjacents);
    Logger.setLogs(obj.logs);
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
