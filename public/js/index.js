var socket = io();

socket.on('connect', function () {
  console.log('connected to the server');

});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (chatMessage) {
  console.log('new chat message', chatMessage);
  var li = jQuery('<li></li>');
  li.text(`${chatMessage.from}: ${chatMessage.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function (){

  });
});
