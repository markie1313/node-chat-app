var expect = require('expect');

var {generateMessage} = require('./message');

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
