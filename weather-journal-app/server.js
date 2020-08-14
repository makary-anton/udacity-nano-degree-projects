// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
    
// Spin up the server
const port = 5000;
const server = app.listen(port, function () {
    console.log(`running on localhost: ${port}`);
});

// GET route returns projectData
app.get('/all', function (req, res) {
    res.send(projectData);
});

// POST route adds data to ProjectData
app.post('/add', function (req, res) {
    appData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    };

    projectData.unshift(appData);
});