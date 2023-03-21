import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BlockForecast from "./Forecast";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./App.css";

import CurrentInfo from "./CurrentMain";


export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels_like: response.data.main.feels_like
    });
  }
  
  function handlerSubmit(event){
    event.preventDefault();
    search();
  }


  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const key = "eb9542c65e739e0fb25ade97c749e2aa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  

  if (weatherData.ready) {
    return (
      <div className = "container" >
        <form className = "enter-city"
          id = "enter_city"
          onSubmit = {handlerSubmit} >
            <div className = "col d-flex">
            <div className="py-1 d-flex justify-content-start">
          {/* <div className="row"> */}
              <div className="py-1 d-flex justify-content-start">
                <FontAwesomeIcon icon = "fa-solid fa-location-dot" size = "6x" />
                <input 
                  type="search"
                  onChange={updateCity}
                  placeholder="Enter a city.."
                  id="input-city"
                  autocomplete="off" 
                /> 
              </div>
              <div className=" py-1 px-2 d-flex justify-content-center align-items-center">
                <Button
                  variant="text"
                  type="submit"
                  value="Search"
                  className="btn py-1 px-2"
                >
                  Search{" "}
                </Button>
              </div>
              <div className="py-1 px-2 d-flex justify-content-center align-items-center">
                <Button variant = "text"
                  value = "Search"
                  type = "button"
                  className = "btn py-1 px-2"
                  id="current_city"
                  // onClick={handleCurrentLocation}
                    >
                    📍
                </Button>
              </div>
            </div>
            </div>
            {/* </div> */}
        </form>{" "}
        <CurrentInfo data={weatherData} />
        <BlockForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}