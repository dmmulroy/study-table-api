const UserController = require('../../../controllers/user');

module.exports = router => {
  router.route('/login').post(UserController.login);

  router.route('/sign-up').post(UserController.create);
};
