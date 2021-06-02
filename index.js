const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

// get takes an api endpoint, and a callback which will fire when this get request get used.
app.get('/api/blocks', (req, res) => {
  // send back the blockchain.chain as json to whoever makes the api/blocks request
  // this is important functionality we'll need for our upcoming API to Slack project
  res.json(blockchain.chain);
});

// when app.listen() is called it will start the express application
// called listen because it will listen for requests upon app startup
// and will listen until it's told not to
//
// takes a port and a callback
const PORT = 3000;
app.listen(PORT, () => {
  console.log("I'm listening at `localhost:${PORT}`");
})
