import React from "react";

// import Search from "./Search";
// import SearchEngine from "./Search";
import ReactAnimatedWeather from 'react-animated-weather';
// import WeatherIcon from "./Icons";
import "./App.css";

export default function Current() {
  return (
    <div>
      <div className="container d-flex mx-3 mt-3 mb-4">
        <div className="container main p-0">
          <div
            className="item col-xl-4 col-md-6 d-flex  mb-2"
            id="current-degree"
          >
            <div className="clearfix weather-temperature">
              <span span className="imoji px-3" >
                <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#000"
                size={65}
                animate={true}
              />
              </span >
              <span className="temperature" id="temperature">
                5
              </span>
              <span className="units">
                <a href="/" id="celsius" className="active">
                  °C
                </a>{" "}
                |
                <a href="/" id="fahrenheit">
                  °F
                </a>
              </span>
            </div>
          </div>
          <div className="item col-xl-4 col-md-3 d-flex mb-2 ">
            <h1 id="city">Kyiv</h1>
            <div className="my-0" id="day-time">
              Friday: 14:00
            </div>
            <div className="my-0" id="description">
              Overcast clouds
            </div>
          </div>
          <div className="item col-xl-4 col-md-3 d-flex mb-2">
            <div className="my-0 precipitation">
              Feels like: <span id="feels">2</span>℃
            </div>
            <div className="my-0 humidity">
              Humidity: <span id="humidity">65</span>%
            </div>
            <div className="my-0 wind">
              Wind: <span id="wind">3</span> km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
