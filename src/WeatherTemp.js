import React from "react";

import "./App.css";

export default function WeatherTemp(props){
    return (
        <div>
            <span className="temperature" id="temperature">
                {Math.round(props.celsius)}
            </span>
    </div>
)
}