var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    personalInfo: {
        name: String,
        lastName: String,
        number: Number,
    },
    meals : [
        {
            name: String,
            cost: Number
        }
    ],
    totalCost: Number,
    email: String,
    address: String,
    location: {
        lat: String,
        lng: String,
    }
});

var Order = module.exports = mongoose.model('order', orderSchema);
module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
};