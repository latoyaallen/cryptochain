const cryptoHash = require('./cryptoHash');

describe('cryptoHash()', () => {

  it('generates a secure hash algorithm via SHA-256 hashed output', () => {
    expect(cryptoHash('Some data'))
    .toEqual('1fe638b478f8f0b2c2aab3dbfd3f05d6dfe2191cd7b4482241fe58567e37aef6');
  });

  // context: use should stmts moving forward like Thoughtworks
  it('should return the output as text in any order when given multiple inputs', () => {
    expect(cryptoHash('dog', 'cat', 'bird', 'tree')).toEqual(cryptoHash('bird', 'cat', 'tree', 'dog'));
  });
});

// we can use https://passwordsgenerator.net/sha256-hash-generator/
