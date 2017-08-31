const Organization = (db, Sequelize) =>
  db.define('organization', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4
    },
    name: Sequelize.STRING
  });

module.exports = Organization;
