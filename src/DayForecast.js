import React from "react";

import WeatherIcon from "./Icons";

import "./App.css";

export default function ShowForecast(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun",
            "Mon",
            "Tue ",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ]
        return days[day];
    }

    return (
        <div className="box-day" >
            <div className="inner-box-day text-align-center d-flex">
                <div className="day-of-week"> {day()}
                </div>
                <div className="icon-forecast">
                    <WeatherIcon code={props.data.weather[0].icon} />
                </div>
                <div className="weather-forecast-temp">
                    <span className="weather-forecast-temp-max ">Max: {maxTemp()}</span>
                    <span className = "weather-forecast-temp-min" > Min: {minTemp()} </span>
                </div>
            </div>
        </div>
        
    )
}
   