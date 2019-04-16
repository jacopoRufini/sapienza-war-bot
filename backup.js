const fs = require('fs');
const folder = './backup';

// we'll use it for delete old backups when the FILELIMIT is reached
module.exports.getFolderSize = function() {
  let count = 0;
  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      count++;
    });
  });
}

// save backup and log in 2 different files
module.exports.saveBackup = function(object, log) {
  let date = new Date();
  fs.writeFile("./backup/ownership-"+date, object, (err) => console.log(err));
  fs.writeFile("./backup/log-"+date, log, (err) => console.log(err));
}
