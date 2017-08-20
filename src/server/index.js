const path = require('path');

const express = require('express');
const cors = require('cors');
const dir = require('node-dir');

const app = express();

app.use(cors());

/* Dynamically add all API Routes */
const apiRouter = express.Router();
const apiPath = path.join(__dirname, '..', 'routes', 'api');

dir.files(apiPath, (err, files) => {
  if (err) throw err;
  files.forEach(filePath => require(filePath)(apiRouter));
});

app.use('/api', apiRouter);

/* End API Routes */

module.exports = app;
