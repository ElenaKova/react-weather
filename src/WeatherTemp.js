import React, {useState} from "react";

import "./App.css";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
       return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
        return (
            <div className="weather-temperature" >
                <span className="temperature" id="temperature">
                    {Math.round(props.celsius)}
                </span>
                <span className="units" > °C | <a href="/" onClick={convertToFahrenheit}>°F</a>
                </span>
            </div>
        );
    } else {
        return (
            <div className="weather-temperature" >
                <span className="temperature" id="temperature">
                    {Math.round(fahrenheit())}
                </span>
                <span className="units">
                <a href="/"  onClick={showCelsius}> °C </a>| °F</span>
            </div>
        );
    }
}