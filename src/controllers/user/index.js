const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../../db');
const User = db.model('user');
const config = require('../../config');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      const hashedPassword = await bcrypt.hash(password, config.SALT_ROUNDS);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
      });

      return res.status(200).end();
    } catch (err) {
      console.error(err);
      return res.status(500).end();
    }
  },

  findAll: async (req, res, next) => {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).end();
    }
  },

  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500).end();
    }
  },

  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;
      const rowsDestroyed = await User.destroy({ where: { id } });
      return res.json({ rowsDestroyed });
    } catch (err) {
      console.error(err);
      return res.status(500).end();
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) res.status(400).end();

      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        const token = jwt.sign({ sub: user.id }, config.JWT_SECRET, {
          issuer: config.JWT_ISSUER,
          expiresIn: config.JWT_EXP
        });

        delete user.dataValues.password;

        return res.json({ token, user });
      }

      return res.status(401).end();
    } catch (err) {
      console.error(err);
      return res.status(500).end();
    }
  }
};
