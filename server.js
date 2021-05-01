const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api_services = require('./routes/api_services');
const dotenv = require('dotenv');
const dbservices = require('./dbservices');
const app = express();


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,    PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static(path.join(__dirname, 'public')));


async function appinitialization() {

    await dbservices.dbInitializtion()
    app.use(bodyParser.json());
    app.use('/', api_services);
    app.listen(8080, () => console.log('Listining on 8080'));
}

appinitialization();
