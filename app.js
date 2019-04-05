const express = require('express');
const app = express();
const server = app.listen(8080);
const fs = require('fs');
const socket = require('socket.io');
const io = socket(server);
let data;

app.use(express.static('public'));

fs.readFile(__dirname + '/public/data.json', handleFile);

io.on('connection', (socket) => {
  console.log('new user: ' + socket.id)
  socket.emit('data', data);
})

setInterval(() => {
  const dep = data[Math.floor(Math.random() * data.length)];
  const dep2 = data[Math.floor(Math.random() * data.length)];
  io.sockets.emit('attack', {att: dep, def: dep2});
},100000);

function handleFile(err, file) {
    if (err) throw err
    data = JSON.parse(file);
}
