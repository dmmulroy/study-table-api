const UserController = require('../../../controllers/user');
// const OrganizationController = require('../../../controllers/organization');

module.exports = router => {
  router.route('/users').get(UserController.findAll);

  router
    .route('/user')
    .get(UserController.findByToken)
    .post(UserController.create);

  router
    .route('/user/:id')
    .get(UserController.findById)
    .delete(UserController.destroy);

  router
    .route('/user/:id/organizations')
    .get(UserController.findUserOrganizations);
};
