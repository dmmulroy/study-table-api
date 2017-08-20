const path = require('path');

const dir = require('node-dir');
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.POSTGRES_URL, {
  define: {
    timestamps: true
  }
});

/* Load models and synchronize them */
const modelsDirPath = path.join(__dirname, '..', 'models');

dir.subdirs(modelsDirPath, (err, subdirs) => {
  subdirs.forEach(subdir => {
    dir.files(subdir, (err, [filePath]) => {
      const Model = require(filePath)(db, Sequelize);
      Model.sync();
    });
  });
});

module.exports = db;
