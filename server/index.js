// FileName: index.js
// Import express
let express = require('express');
const apiRoutes = require("./routes/index");
const bodyParser = require('body-parser');
const db = require('./database/index');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// Initialize the app
let app = express();
app.use(cors());
app.use(helmet.noCache());
app.use(helmet.frameguard());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

if (app.get('env') === 'production') {
    app.use(logger('combined'));
} else {
    app.use(logger('dev'));
}

// Setup server port
const port = process.env.PORT || 5000;
// Send message for default URL
app.get('/', (req, res) => res.send('Express API'));
// Launch app to listen to specified port
app.listen(port, () => {
    console.log("Running Server on port " + port);
});

module.exports = app;