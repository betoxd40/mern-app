// FileName: index.js
// Import express
let express = require('express');
let apiRoutes = require("./routes/index");
let bodyParser = require('body-parser');
let db = require('./database/index');

// Initialize the app
let app = express();

app.use('/api', apiRoutes);
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));


// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Server on port " + port);
});