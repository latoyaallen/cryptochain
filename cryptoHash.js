// native Node.js Crypto Module
// provides a way of handling encrypted data
// https://www.w3schools.com/nodejs/ref_crypto.asp
const crypto = require('crypto');

// use the ... spread operator.
// inputs is an array
// Will gather n number or args into the inputs array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const cryptoHash = (...inputs) => {
  const hash = crypto.createHash('sha256');

  // update takes a string, so we need to convert the inputs array to a string
  hash.update(inputs.sort().join(' '));

  // digest is a cryptography term.  We want to digest (get the result) of the hash
  // Calculates the digest (result) of all of the data passed to be hashed
  // https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding
  return hash.digest('hex');
};

module.exports = cryptoHash;
