const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.use(express.static('public'));
 
const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  socket.on('mouse', mouseMsg);
  
  function mouseMsg(data) {
  	socket.broadcast.emit('mouse', data);
  	// io.sockets.emit('mosue', data);
    // console.log(data);
  }
}