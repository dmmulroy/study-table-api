const express = require('express');
const app = express();

app.get('/hello-world', (req, res) => {
  return res.json({ status: 200, message: 'hello world' });
});

module.exports = app;
