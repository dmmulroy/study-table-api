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

User.belongsTo(Organization);

db.sync({ force: true });

module.exports = db;
