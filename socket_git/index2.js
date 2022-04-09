// socket.io chat tutorial!
// 소켓은 실시간 채팅 시스템으로서 구조화되었음

// socket.io homework

// 1. Broadcast a message to connected users when someone connects or disconnects. -- solve!
// 2. Add support for nicknames. -- login system?
// 3. Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
// 4. Add “{user} is typing” functionality.
// 5. Show who’s online.
// 6. Add private messaging.
// Share your improvements!


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const authRouter = require('./routes/auth.js');
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world<h1>');
// });

// refactoring

app.use('/', authRouter);

var users = 0;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});


// io.emit('some event', {someProperty: 'some value', otherProperty: 'other value'}); 
// This will emit the event to all connected sockets

io.on('connection', (socket) => {
  console.log(`user ${users} connected`);

  // socket.on('hello', () => {
  //   hiMsg = `new user ${users} connected!`;
  //   users++;
  //   io.emit('first', hiMsg);
  // });

  // -- homework 1.
  io.emit('hello', `new user ${users} connected!`);
  users++;

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log(`user ${users} disconnected`);
    // homework 1.
    io.emit('bye', `user ${users} disconnected`);
  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});