const controller = require('../controllers/transaction.controller');

module.exports = (router) => {
  router.get('/transaction/:id', controller.get)
};
