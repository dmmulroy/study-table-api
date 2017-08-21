const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Strategy: PassportLocalStrategy } = require('passport-local');

const db = require('../../db');

const User = db.model('user');
const { JWT_SECRET } = process.env;

// Login Strategy - WIP
module.exports = {
  new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  }, async (req, email, password, done) => {
    try {
      const user = await User.findOne({ where: { email }});
      if (!user) {} // TODO: handle if no user is found
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign({ sub: user.id }, JWT_SECRET);
        return done(null, token, data);
      }
    } catch (err) {
      console.error(err);
    }

  });
}
