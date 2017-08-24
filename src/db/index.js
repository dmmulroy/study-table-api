const path = require('path');

const dir = require('node-dir');
const Sequelize = require('sequelize');

// const config = require('../config');

const db = new Sequelize('postgres://study-table-dev:study-table-dev@localhost:5432/study_table', {
  define: {
    timestamps: true
  }
});

/* Load models and synchronize them */
const modelsPath = path.join(__dirname, '..', 'models');

dir.files(modelsPath, (err, files) => {
  files.forEach(filePath => {
    const Model = require(filePath)(db, Sequelize);
    Model.sync();
  });
});

module.exports = db;
