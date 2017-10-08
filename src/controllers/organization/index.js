const jwt = require('jsonwebtoken');

const db = require('../../db');
const Organization = db.model('organization');
const User = db.model('user');
const UserOrganization = db.model('UserOrganization');

const config = require('../../config');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const { sub: userId } = req.decodedToken;

      const organization = await Organization.create({ name });

      UserOrganization.create({ userId, organizationId: organization.id });

      return res.json({ [organization.id]: organization });
    } catch (err) {
      console.error(err);
      return res.status(500).end();
    }
  }
};
