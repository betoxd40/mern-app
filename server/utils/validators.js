const Joi = require('joi');

const validateResponseData = dataBody => {
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
    const { error } = Joi.validate(dataBody, schema);
    return error;
};

module.exports = validateResponseData;