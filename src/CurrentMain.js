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
            <div className="my-0" id="description">
              {props.data.description}
            </div>
        </div>
      {/* <div className="container d-flex"> */}
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
        <div className="item description col-lg-8 col-md-6 d-flex justify-content-start
           align-items-start">
            <div className="my-0 precipitation">
              Feels like: <span id="feels">{Math.round(props.data.feels_like)}</span>℃
            </div>
            <div className="my-0 humidity">
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </div>
            <div className="my-0 wind">
              Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
