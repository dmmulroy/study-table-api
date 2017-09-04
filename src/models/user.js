const User = (db, Sequelize) =>
  db.define(
    'user',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4
      },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      defaultOrganizationId: Sequelize.UUID,
      tokenId: Sequelize.UUID
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
