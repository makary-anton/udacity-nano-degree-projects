var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var AYLIENTextAPI = require("aylien_textapi")

const dotenv = require('dotenv');
dotenv.config({ path: "process.env" });
//console.log(require('dotenv').config())

console.log(`Your API key is ${process.env.API_KEY}`);

var textapi = new AYLIENTextAPI({
    application_id: "c51b8892",
    application_key: "d14f0d6d3d184488c8d47faf31f066d7"
  });


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
})

app.post('/sentiment', async (req, res) => {
    textapi.sentiment({
      url: req.body.bodyData
    }, function(error, response) {
      if (error === null) {
        res.send(response);
        console.log(response);
      } else {
        console.log(error);
      }
    });
  })
