const path = require('path');

const dir = require('node-dir');
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.PGURL, {
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
