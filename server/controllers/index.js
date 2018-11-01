Order = require('../models/index');

// Handle index actions
exports.index = function (req, res) {
    Order.get(function (err, orders) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Orders retrieved successfully",
            data: orders
        });
    });
};

// Handle create order actions
exports.new = function (req, res) {
    var order = new Order();
    order.personalInfo = req.body.personalInfo ? req.body.personalInfo : order.personalInfo;
    order.meals = req.body.meals;
    order.totalCost = req.body.totalCost;
    order.address = req.body.address;
    order.location = req.body.address;
    order.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New order created!',
            data: order
        });
    });
};