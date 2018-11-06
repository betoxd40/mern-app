const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    personalInfo: {
        name: String,
        lastName: String,
        number: String,
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

const Order = module.exports = mongoose.model('order', orderSchema);
module.exports.get = (callback, limit) => {
    Order.find(callback).limit(limit);
};