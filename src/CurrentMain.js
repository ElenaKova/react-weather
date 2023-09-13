import React from "react";
import FormatDate from "./FormatDate";

import WeatherIcon from "./Icons";
import "./App.css";
import WeatherTemp from "./WeatherTemp";

export default function CurrentInfo(props) {
  return (
    <div className="currentInfo">
      <div div className="item col-12 col-md-3 d-flex pb-4" >
            <h1 id="city">{props.data.city}</h1>
            <div className="my-0" id="day-time">
              <FormatDate date={props.data.date} />
            </div>
            <div div className = "my-0 description"
            id = "description" >
              {props.data.description}
            </div>
        </div>
        
        <div className="main">
          <div className = "item col-lg-4 col-md-6 d-flex" id="current-degree">
            <div className="clearfix text-align-center weather-temperature">
              <span span className="emoji" >
                <WeatherIcon code={props.data.icon} />
              </span >
              <span className="temperature" id="temperature">
                <WeatherTemp celsius={props.data.temperature} />
              </span>
            </div>
          </div>
        <div className="item description col-lg-8 col-md-6 d-flex">
            <div className = "desc px-1 precipitation" >
              Feels like: <span id = "feels detail"> {
                Math.round(props.data.feels_like)
              }</span>°C
            </div>
            <div className = "mt-1 px-1 desc humidity" >
              Humidity: <span id="humidity detail">{props.data.humidity} </span>%
            </div>
            <div className = "mt-1 px-1 desc wind" >
              Wind: <span id="wind detail">{Math.round(props.data.wind)}</span> km/h
            </div>
          </div>
        </div>
      </div>
  );
}
