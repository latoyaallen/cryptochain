const cryptoHash = require('./cryptoHash');

describe('cryptoHash()', () => {

  it('generates a secure hash algorithm via SHA-256 hashed output', () => {
    expect(cryptoHash('Some data'))
    .toEqual('3e2375dfb966b17175385dc2313d3373e04cb418c2e4194a027ed8db6bd198e8');
  });
  // I didn't like how the original test was written
  // context: use should stmts moving forward like Thoughtworks
  it('should return the hashed output in any order when given multiple inputs', () => {
    expect(cryptoHash('dog', 'cat', 'bird', 'tree')).toEqual('bird', 'cat', 'tree', 'dog');
  });
});

// we can use https://passwordsgenerator.net/sha256-hash-generator/
