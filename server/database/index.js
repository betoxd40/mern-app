const mongoose = require('mongoose');
const config = require('config');

const dbConfig = config.get('dbConfig');

// Connection to Mongoose
mongoose.connect(dbConfig.url);

module.exports = mongoose.connection;