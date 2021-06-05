const Block = require('./block');
const cryptoHash = require('./cryptoHash');
const { GENESIS_DATA } = require('./config');

describe('Block', () => {
  const timestamp = 'timestamp';
  const lastHash = 'lastHash';
  const hash = 'hash';
  const data = ['blockchain', 'data'];

  const block = new Block({
    timestamp,
    lastHash,
    hash,
    data,
  });

  it('has the necessary properties to build a block', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe('genesis()', () => {
    const genesisBlock = Block.genesis();

    it('is an instance of the Block class', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });

  describe('mineBlock()', () => {
    const lastBlock = Block.genesis();
    const data = 'mined data'
    const minedBlock = Block.mineBlock({ lastBlock, data });

    it('is an instance of the Block class', () => {
      expect(minedBlock instanceof Block).toBe(true);
    });

    it('sets the `lastHash` to be the `hash` of the last block', () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it('sets the `data` ', () => {
      expect(minedBlock.data).toEqual(data);
    });

    it('sets a `timestamp` ', () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });

    // moving forward we're using the should syntax like Thoughtworks does
    it('should create a SHA-256 hash based on the inputs', () => {
      // the mined block is the current block we've just mined
      // the last block, in this case, is the genesis block.
      // Most of the time it won't be the genesis block
      expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data));
    });
  });
});























