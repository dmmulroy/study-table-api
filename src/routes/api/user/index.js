const UserController = require('../../../controllers/user');

module.exports = router => {
  router.route('/users').get(UserController.findAll);

  router
    .route('/user/:id')
    .get(UserController.findById)
    .delete(UserController.destroy);

  router
    .route('/user')
    .get(UserController.findByToken)
    .post(UserController.create);
};
