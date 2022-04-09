// socket.io chat tutorial!
// 소켓은 실시간 채팅 시스템으로서 구조화되었음

// socket.io homework

// Broadcast a message to connected users when someone connects or disconnects.
// Add support for nicknames.
// Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
// Add “{user} is typing” functionality.
// Show who’s online.
// Add private messaging.
// Share your improvements!


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world<h1>');
// });

// refactoring

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.emit('some event', {someProperty: 'some value', otherProperty: 'other value'}); 
// This will emit the event to all connected sockets

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit('hi');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});