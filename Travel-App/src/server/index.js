var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const projectData= {};

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/weather', async(req, res)=>{
    //data
    projectData.country = req.body.country;
    projectData.city = req.body.city;
    projectData.startDate = req.body.startDate;
    projectData.endDate = req.body.endDate;
    projectData.minTemperature = req.body.minTemperature;
    projectData.maxTemperature = req.body.maxTemperature;
    projectData.weatherdesc = req.body.weatherdesc;
    
    projectData.picture = req.body.picture;

    //parse data
    const jsonParseData = JSON.parse('{"response": "POST received"}');
    res.send(jsonParseData);
});

app.get('/get', async(req, res)=>{
  res.send(projectData);
});

// designates what port the app will listen to for incoming requests
app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})


