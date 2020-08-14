//geonames api data call
const geonames = require("./geonames");

//openweather api data call
const weatherCall = require("./weather");

//pixabay api data call
const pixabay = require("./pixabay");



export async function submitForm(e) {
  //get location
  const location = document.getElementById("country").value;
  // tripstart date
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);

  // To calculate the no. of days between two dates
  let tripLong = parseInt((endDate - startDate) / (24 * 3600 * 1000));

  if (!location) {
    document.querySelector('.error').style.display = "block";
    return alert('Please enter country');
  }

    // geonames Api
    const longLat = await getAllData(geonames.geonamesApiUrl + location + geonames.maxRows + "&username=" + geonames.username);
    // lat data
    const lat = longLat.geonames[0].lat;
    // long data
    const long = longLat.geonames[0].lng;

    //weatherbit API using lng and lat we grap from geonames api.
    const weather = await getAllData( weatherCall.weatherUrl + "lat=" + lat + "&lon=" + long + "&appid=" + weatherCall.key);

    //api pixabay call to get the picture.
    const picture = await getAllData(
    pixabay.pixabayApi + "key=" + pixabay.pixApikey + "&q=" + location + pixabay.pixabayurl);

  //posting data in server
  return (
    postToServer("/weather", {
        country: longLat.geonames[0].countryName,
        city: longLat.geonames[0].toponymName,
        startDate: startDate,
        endDate: endDate,
        tripLong: tripLong,
        weatherdesc: weather.weather[0].description,
        minTemperature: weather.main.temp_min,
        maxTemperature: weather.main.temp_max,    
        picture: picture.hits[0].largeImageURL,
    })
    //server data
    .then(function (res) {
    return getAllData("/get");
    })
    //Update Dom
    .then(function (res) {

    //get img location
    const locationimg = document.getElementById("img-location");

    //check if there is image or not
    if (!res.picture) {
        locationimg.src = "https://dummyimage.com/600x400/000000/e4e4eb.jpg&text=no+image+found";
    }

    locationimg.src = res.picture;
    
    document.querySelector(".plan-details").innerHTML = `
            <div>               
                <label for="">My plan to: </label>
                <p id="place">${res.country}, ${res.city}</p>
            </div>

            <div>
                <label for="">Departing: </label>
                <p id="plan-info">${tripLong} Days <br> 
                    from: ${startDate.toDateString()}<br> 
                    To: ${startDate.toDateString()}
                </p>
            </div>

            <div>
                <label for="">Weather Discrption: </label>
                <p id="weather">${res.weatherdesc}</p>
            </div>

            <div>
                <label for="">Min-Temp&Max-temp: </label>
                <p id="weather-minMax">Min-Temp: ${res.minTemperature} , Max-temp: ${res.maxTemperature}</p>
            </div>
        `;
    })
  );
}

//post the data to server
export const postToServer = async (url = "", data = {}) => {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const allData = await res.json();
      return allData;
    } catch (error) {
      console.log(error);
    }
};


//get & post data from api.
export const getAllData = async (url = "") => {
  const response = await fetch(url);
  try {
    const data = response.json();
    return data;
  } catch (error) {
    alert(error);
  }
};

 // reset plan fun
export function resetplan() {
    document.getElementById("place").innerHTML = '........';
    document.getElementById("plan-info").innerHTML = '........';
    document.getElementById("weather").innerHTML = '........';
    document.getElementById("weather-minMax").innerHTML = '........';
    document.getElementById("img-location").src = 'https://dummyimage.com/600x400/ffffff/000000.jpg&text=image+location';
}
