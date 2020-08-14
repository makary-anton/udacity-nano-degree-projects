## Introduction

This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. Given that this is the Capstone project, it's highly encouraged for you to go above and beyond, adding additional functionality and customization to truly stand out with a project you are proud to have at the top of your portfolio!

## Project Sammery

The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API is fantastic but it doesn’t let you get future data for free and it’s not that flexible with what information you enter; we are going to use the Weatherbit API for you to see how another API accomplishes the same goals. Weatherbit API has one problem, it only takes in coordinates for weather data -- it’s that specific. So, we’ll need to get those coordinates from the Geonames API. Once we have all of this data, we’ll want to display an image of the location entered; for this, we will be using the Pixabay API. 

# Description
This project is a travel app which use 3 different API.
- Geonames Api
- openweathermap api
- Pixabay api

## setup evn

-- Signup up the API geonames
First, you will need to go [here](https://www.geonames.org/login). 
Signing up will get you an API username


-- Step 1: Signup for an API openweathermap
First, you will need to go [here](https://home.openweathermap.org/users/sign_up). Signing up will get you an API key.

--- Step 2: Signup for an API pixabay
First, you will need to go [here](https://pixabay.com/accounts/register/?source=main_nav). Signing up will get you an API key.


- `cd` into your new folder and run:
- `npm install`

//start server node
- npm run start

//if you want to run development
- npm run build-dev

//if you want to run production
- npm run build-prod



