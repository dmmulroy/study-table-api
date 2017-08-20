const db = require('../../db');
const User = db.model('user');

module.exports = {
  findAll: async (req, res, next) => {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500);
    }
  }
};
