const express = require('express');
const cors = require('cors');
const app = express();

// configure app to use CORS.  origin function allows ALL domains so we don't have to whitelist all our servers
app.use(
  cors({
    credentials: true,
    origin: function(origin, callback) {
      callback(null, true);
    }
  })
);

app.get('/hello-world', (req, res) => {
  return res.status(200).json({ status: 200, message: 'hello world' });
});

module.exports = app;
