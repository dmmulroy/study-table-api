const User = (db, Sequelize) =>
  db.define('user', {
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
  });

module.exports = User;
