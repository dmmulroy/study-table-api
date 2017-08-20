// Bootstrap enviornment variables
require('dotenv').config();
const http = require('http');

const app = require('./src/server');
const db = require('./src/db');

const server = http.createServer(app);

server.listen(process.env.API_PORT || 3001, err => {
  if (err) console.log('error starting server', err);
  console.log('server running on port', process.env.API_PORT || 3001);
});
