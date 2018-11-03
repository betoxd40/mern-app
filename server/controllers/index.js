Order = require('../models/index');
MapClient = require('../utils/maps');

// Handle index actions
exports.index = function (req, res) {
    Order.get(function (err, orders) {
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        }
        res.json({
            success: true,
            message: orders,
        });
    });
};

// Handle create order actions
exports.new = function (req, res) {
    const order = new Order();
    const { personalInfo, meals, totalCost, address, location } = req.body;
    order.personalInfo = personalInfo;
    order.meals = meals;
    order.totalCost = totalCost;
    order.address = address;
    order.location = location;
    const destinyDirection = location.lat + ',' + location.lng;
    const ETA = new MapClient().getETA(destinyDirection);
    order.save(function (err) {
        if (err) res.json(err);
        if (!ETA) {
            res.status(400)
                .json({
                    success: false,
                    message: 'You should check your api key'
                });
        } else  {
            res.status(200)
                .json({
                    success: true,
                    ETA: ETA
                });
        }
    });
};