const Block = require('./block');
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
});
