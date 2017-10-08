const db = require('../../db');
const Organization = db.model('organization');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const organization = await Organization.create({ name });
      return res.json({ [organization.id]: organization });
    } catch (err) {
      console.error(err);
      return res.status(500).end();
    }
  }
};
