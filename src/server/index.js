const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/hello-world', (req, res) => {
  return res.status(200).json({ status: 200, message: 'Hello World' });
});

module.exports = app;
