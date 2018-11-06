// FileName: index.js
// Import express
let express = require('express');
const apiRoutes = require("./routes/index");
const bodyParser = require('body-parser');
const db = require('./database/index');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const os = require('os');
const v8 = require('v8');
const pkg = require('../package.json');

// Initialize the app
let app = express();
app.use(cors());
app.use(helmet.noCache());
app.use(helmet.frameguard());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', async (req, res, next) => {
    res.json({
        name: process.name,
        nodeVersion: process.versions.node,
        envMode: process.env.NODE_ENV || null,
        memoryUsage: process.memoryUsage(),
        upTime: process.uptime(),
        totalMem: os.totalmem(),
        freeMem: os.freemem(),
        loadAvg: os.loadavg(),
        heap: v8.getHeapStatistics(),
        host: os.hostname(),
        packageJSON: pkg.version
    });
});

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