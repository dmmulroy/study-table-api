const path = require('path');

const dir = require('node-dir');
const Sequelize = require('sequelize');

const config = require('../config');

const db = new Sequelize(config.PGURL, {
  dialectOptions: {
    ssl: true
  },
  define: {
    timestamps: true
  }
});

const User = require('../models/user')(db, Sequelize);
const Organization = require('../models/organization')(db, Sequelize);
const Token = require('../models/token')(db, Sequelize);

// Associations
User.belongsTo(Organization, { as: 'defaultOrganization' });
User.belongsToMany(Organization, {
  through: 'UserOrganization',
  foreignKey: 'userId'
});
Token.hasOne(User);

db.sync({ force: false });

module.exports = db;
