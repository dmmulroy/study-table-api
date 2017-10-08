const UserController = require('../../../controllers/user');

module.exports = router => {
  router.route('/login').post(UserController.login);

  router.route('/sign-up').put(UserController.create);
};
