const Blockchain = require('./blockchain');
const Block = require('./block');


describe('Blockchain', () => {
  const blockchain = new Blockchain();

  it('should contain an instance of chain as an Array', () => {
    // I normally don't like tests that test an instance of
    // a built in Javascript data structure
    // but for documentation purposes
    // I'd like to keep this test.
    expect(blockchain.chain instanceof Array).toBe(true);
  })
});
