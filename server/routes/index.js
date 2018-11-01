var orderController = require('../controllers');

let router = require('express').Router();

// Order routes
router.route('/')
    .get(orderController.index)
    .post(orderController.new);

module.exports = router;