const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./cryptoHash');

class Block {
  constructor({timestamp, lastHash, hash, data}) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  // static methods or properties are called on the class, but
  // not on any instance of the class
  // this allows us to implement the Factory Pattern
  // the genesis method creates a new instance of the Block class
  //
  static genesis() {
    // this will refer to the Block class
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data}) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    // this will refer to the Block class
    return new this({
      timestamp,
      lastHash,
      data,
      hash: cryptoHash(timestamp, lastHash, data)
    });
  }
}

module.exports = Block;

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
 * A Genesis block in the first block in a Blockchain
 *
 *
 * A Mine block is new block on the chain that has some data, and points
 * back to the block before it.  It does some computational work to let the
 * chain grow at a reasonable pace.  This computational work is called mining.
 *
 * A Genesis block can never be a Mine block.  A Mine block can never be a Genesis block.
 *
 * The first Mine block will always point back to the Genesis block of a blockchain.
 *
 *
 *
 */
