require('./../config/config');
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    //io.emit sends to all connected users
    socket.emit('newMessage', generateMessage('Admin', 'welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
  });

    socket.on('createMessage', (message) => {
      console.log('createMessage', message);
      io.emit('newMessage', generateMessage(message.from, message.text));
    });
  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
