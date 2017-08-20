const db = require('../../db');
const User = db.model('user');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password });

      return res.json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500);
    }
  },

  findAll: async (req, res, next) => {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500);
    }
  },

  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500);
    }
  },

  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;
      const rowsDestroyed = await User.destroy({ where: { id } });
      return res.json({ rowsDestroyed });
    } catch (err) {
      console.error(err);
      return res.status(500);
    }
  }
};
