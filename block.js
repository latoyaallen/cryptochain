const { GENESIS_DATA } = require('./config');

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
 */
