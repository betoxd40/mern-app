let mongoose = require('mongoose');

var databaseName = 'testDatabase';

// Connection to Mongoose
mongoose.connect('mongodb://localhost:27017/testDatabase');

module.exports = mongoose.connection;