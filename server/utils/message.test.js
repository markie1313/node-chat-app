var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {

  var theMessage = generateMessage('bill', 'whatcha');

      expect(theMessage.text).toBe('whatcha');
      expect(theMessage.from).toBe('bill');
      expect(theMessage.createdAt).toBeA('number');
      expect(theMessage).toInclude({
        from: theMessage.from,
        text: theMessage.text
      });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});

  });
});
