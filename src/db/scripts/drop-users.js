require('dotenv').config();
const { Client } = require('pg');
const client = new Client();

(async () => {
  try {
    await client.connect();
    const res = await client.query('DROP TABLE users');
    console.log('result:', res);
    client.end();
  } catch (err) {
    console.error('error:', err);
    client.end();
  }
})();
