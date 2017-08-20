const UserController = require('../../../controllers/user');

module.exports = router => {
  router.route('/users').get(UserController.findAll);
};
