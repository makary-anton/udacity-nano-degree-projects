// Personal API Key for OpenWeatherMap API
const appID = 'dc38c3d18b4a520468711a8ae61464b5';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', getResults);

/* Function called by event listener */
function getResults(e) {
    const zipCode = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;

    getWeather(baseUrl, zipCode, appID)
    .then(function(data) {
        let date = new Date(data.dt * 1000)
        let dateStr = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
        postData('/add', {temperature: data.main.temp, date: dateStr, userResponse: userResponse});
        updateUI('/all');
    })
};

/* Function to GET Web API */
const getWeather = async (baseUrl, zipCode, appID) => {
    const response  = await fetch(baseUrl + zipCode + '&appid=' + appID);
    try {
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('error', error);
    };
};

/* Function to POSTData */
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newInfo = await res.json();
        return newInfo;
    } catch(error) {
        console.log('error', error);
    };
};

/* Function to GET ProjectData */
const updateUI = async(url='') => {
    const req = await fetch(url);
    try {
        const allData = await req.json();
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temperature;
        document.getElementById('content').innerHTML = allData[0].userResponse;
    } catch(error) {
        console.log('error', error);
    };
};