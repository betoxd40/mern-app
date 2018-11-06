const Order = require('../models/index');
const getETA = require('../utils/maps');
const validateResponseData = require('../utils/validators');

// Handle index actions
exports.index = (req, res) => {
    Order.get((err, orders) => {
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        }
        res.status(200)
            .json({
                success: true,
                message: orders,
            });
    });
};

// Handle create order actions
exports.new = async (req, res) => {
    const dataValidation = req.body;
    const error = validateResponseData(dataValidation);
    if(error) {
        res.status(400).json({
            success: false,
            message: 'Bad request data',
            error: error.details.shift().message,
        });
    }
    const order = new Order();
    const {personalInfo, meals, totalCost, address, location} = req.body;
    order.personalInfo = personalInfo;
    order.meals = meals;
    order.totalCost = totalCost;
    order.address = address;
    order.location = location;
    const destinyDirection = location.lat + ',' + location.lng;
    const ETA = await getETA(destinyDirection);
    order.save(err => {
        if (err) res.json(err);
        if (!ETA) {
            res.status(400)
                .json({
                    success: false,
                    message: 'You should check your api key',
                });
        } else {
            res.status(200)
                .json({
                    success: true,
                    ETA: ETA
                });
        }
    });
};