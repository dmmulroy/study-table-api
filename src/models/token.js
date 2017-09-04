const Token = (db, Sequelize) =>
  db.define('token', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4
    },
    value: { type: Sequelize.STRING, allowNull: false, unique: true },
    expired: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
  });

module.exports = Token;
