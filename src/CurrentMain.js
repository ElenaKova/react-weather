import React from "react";
import FormatDate from "./FormatDate";

import WeatherIcon from "./Icons";
import "./App.css";
import WeatherTemp from "./WeatherTemp";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <div className="container d-flex">
        <div className="container main p-0">
          <div div className = "item col-xl-3 col-md-6 d-flex justify-content-start"
            id="current-degree">
            <div className="clearfix weather-temperature">
              <span span className="emoji px-3" >
                <WeatherIcon code={props.data.icon} />
              </span >
              <span className="temperature" id="temperature">
                <WeatherTemp celsius={props.data.temperature} />
              </span>
              <span className="units">
                <a href="/" id="celsius" className="active">
                  °C
                </a>{" "}
                {/* |
                <a href="/" id="fahrenheit">
                  °F
                </a> */}
              </span>
            </div>
          </div>
          <div div className = "item col-xl-3 col-md-3 d-flex align-items-start" >
            <h1 id="city">{props.data.city}</h1>
            <div className="my-0" id="day-time">
              <FormatDate date={props.data.date} />
            </div>
            <div className="my-0" id="description">
              {props.data.description}
            </div>
          </div>
          <div className="item col-xl-3 col-md-3 d-flex justify-content-end align-items-start">
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
    </div>
  );
}
