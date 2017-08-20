const path = require('path');

const express = require('express');
const cors = require('cors');
const dir = require('node-dir');

const app = express();
const router = express.Router();

app.use(cors());

const apiPath = path.join(__dirname, '..', 'routes', 'api');

dir.files(apiPath, (err, files) => {
  if (err) throw err;
  files.forEach(filePath => require(filePath)(router));
});

app.get('/hello-world', (req, res) => {
  return res.status(200).json({ status: 200, message: 'Hello World' });
});

module.exports = app;
