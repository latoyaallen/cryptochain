const Block = require ('./block');

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
});
