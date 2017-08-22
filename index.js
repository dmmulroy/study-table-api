// Bootstrap enviornment variables
require('dotenv').config();

const http = require('http');

const config = require('./src/config');
const app = require('./src/server');
const db = require('./src/db');

const server = http.createServer(app);

server.listen(config.API_PORT, err => {
  if (err) console.log('error starting server', err);
  console.log('server running on port', config.API_PORT);
});
