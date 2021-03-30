class Block {
  constructor({timestamp, lastHash, hash, data}) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block(
  {
    timestamp: '01/01/01',
    lastHash: 'some-last-hash',
    hash: 'some-new-hash',
    data: 'some-data'
  }
);

module.exports = Block;

console.log('block1', block1);


/* A Block has 4 attrubutes:
 *
 *
 *  * A Time Stamp
 *    * created using JavaScript Date Obj
 *
 *  * lastHash
 *    * The hash of the block that came before it
 *
 *  * Data
 *    * Could be an array of items, a string, etc
 *
 *  * Hash for the new block
 *    * generated from its own data
 *
 *
 */
