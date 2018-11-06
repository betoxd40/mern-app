Order = require('../models/index');
getETA = require('../utils/maps');
const Joi = require('joi');

// Handle index actions
exports.index = (req, res) => {
    Order.get( (err, orders) => {
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
    const order = new Order();
    const dataValidation = req.body;

    const schema = Joi.object().keys({
        personalInfo: Joi.object().keys({
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            number: Joi.string().required(),
        }).required(),
        meals: Joi.array().items(Joi.object()).required(),
        totalCost: Joi.number().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        location: Joi.object().keys({
            lat: Joi.string().required(),
            lng: Joi.string().required(),
        }).required(),
    });

    const { error } = Joi.validate(dataValidation, schema);
    if (error) {
        res.status(422).json({
            success: false,
            message: 'Invalid request data',
        });
    } else {
        const { personalInfo, meals, totalCost, address, location } = req.body;
        order.personalInfo = personalInfo;
        order.meals = meals;
        order.totalCost = totalCost;
        order.address = address;
        order.location = location;
        const destinyDirection = location.lat + ',' + location.lng;
        const ETA = await getETA(destinyDirection);
        console.log(ETA);
        order.save( err => {
            if (err) res.json(err);
            if (!ETA) {
                res.status(400)
                    .json({
                        success: false,
                        message: 'You should check your api key'
                    });
            } else {
                res.status(200)
                    .json({
                        success: true,
                        ETA: ETA
                    });
            }
        });
    }
};