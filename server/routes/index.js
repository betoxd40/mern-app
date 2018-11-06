const orderController = require('../controllers/index');

let router = require('express').Router();

// Order routes
router.route('/orders')
    .get(orderController.index)
    .post(orderController.new);

module.exports = router;