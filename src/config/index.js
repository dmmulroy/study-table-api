module.exports = {
  API_PORT: process.env.API_PORT || 3001,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ISSUER: process.env.JWT_ISSUER || 'study-table-api',
  JWT_EXP: process.env.JWT_EXP || '30d',
  SALT_ROUNDS: 10,
  PGURL: process.env.PGURL
};
