const OrganizationController = require('../../../controllers/organization');

module.exports = router => {
  router.route('/organization').put(OrganizationController.create);
};
