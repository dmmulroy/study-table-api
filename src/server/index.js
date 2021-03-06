const path = require('path');

const dir = require('node-dir');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authMiddleWare = require('../middleware/auth');

const app = express();
const jsonParser = bodyParser.json();

// Initialize common middleware
app.use(cors(), jsonParser);

/* Dynamically add all Authentication Routes */
const authRouter = express.Router();
const authPath = path.join(__dirname, '..', 'routes', 'auth');

dir.files(authPath, (err, files) => {
  if (err) throw err;
  files.forEach(filePath => require(filePath)(authRouter));
});

app.use('/auth', authRouter);
/* End Authentication Routes */

/* Dynamically add all API Routes */
const apiRouter = express.Router();
const apiPath = path.join(__dirname, '..', 'routes', 'api');

dir.files(apiPath, (err, files) => {
  if (err) throw err;
  files.forEach(filePath => require(filePath)(apiRouter));
});

app.use('/api', authMiddleWare, apiRouter);
/* End API Routes */

module.exports = app;
