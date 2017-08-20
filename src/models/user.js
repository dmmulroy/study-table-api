const User = (db, Sequelize) =>
  db.define(
    'user',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4
      },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['email']
        }
      ]
    }
  );

module.exports = User;
