var socket = io();

socket.on('connect', function () {
  console.log('connected to the server');

  socket.emit('createMessage', {
    from: 'jen',
    text: 'hey, this is phred'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (chatMessage) {
  console.log('new chat message', chatMessage);
});
