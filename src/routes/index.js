const { Router } = require('express');
const transaction = require('./transaction');
const controller = require('../controllers/index.controller');

const router = Router();
router.get('/', controller.get);
transaction(router);
module.exports = router;
