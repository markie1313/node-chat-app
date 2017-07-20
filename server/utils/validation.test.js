const expect = require('expect');

// import isRealString
var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var theStr = isRealString(98);
    expect(theStr).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var theStr = isRealString('    ');
    expect(theStr).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var theStr = isRealString('fgfgdfg dgdge553 dg ggd   ');
    expect(theStr).toBe(true);
  });
});
