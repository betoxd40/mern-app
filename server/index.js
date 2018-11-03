// FileName: index.js
// Import express
let express = require('express');
let apiRoutes = require("./routes/index");
let bodyParser = require('body-parser');
let db = require('./database/index');
let cors = require('cors');

// Initialize the app
let app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);


// Setup server port
var port = process.env.PORT || 5000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Server on port " + port);
});