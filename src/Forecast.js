import React from "react";
// import axios from "axios";

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

    function formatDay() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ]
        return days[day];
    }


    return (
        <div>
            <div className="box-day" >
                <div className="container inner-box-day d-flex">
                    <div className="day-of-week align-items-center "> {formatDay()}
                    </div>
                    <WeatherIcon code={props.data.weather[0].icon} size={36} />
                    <div className="weather-forecast-temp">
                        <span className="weather-forecast-temp-max">Max: {Math.round(maxTemp())}˚</span>
                        <span className="weather-forecast-temp-min">Min: {Math.round(minTemp())}˚</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
    

    // function displayForecast(response) {
    //     let forecast = response.data.daily;

    //     let forecastElement = document.querySelector("#forecast");

    //     let forecastHTML = "";
    //     forecast.forEach(function (forecastDay, idx) {
    //         if (idx < 7) {
    //             forecastHTML = forecastHTML +
    //                 `
        // <div class = "box-day" >
        // <div class="container inner-box-day d-flex">
        //     <div class = "day-of-week align-items-center " > ${formatDay(forecastDay.dt)
        //             } </div>
        //         <div><img class="img-fluid" src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
        //             alt="" 
        //             />
        //             </div>
        //         <div class="weather-forecast-temp">
        //                 <span class = "weather-forecast-temp-max">Max: ${Math.round(forecastDay.temp.max)}˚</span><br>
        //                 <span class = "weather-forecast-temp-min">Min: ${Math.round(forecastDay.temp.min)}˚</span>
        //         </div>
        //     </div>
        //     </div>
        // </div>
    // `;
    //         }
    //     })
    //     forecastElement.innerHTML = forecastHTML;
    // };

//     function getForecast(coordinates) {
//         console.log(coordinates);
//         let key = "eb9542c65e739e0fb25ade97c749e2aa";
//         let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric`;
//         axios.get(url).then(displayForecast);
//     }

//     function displayWeather(response) {
//         let cityElement = document.querySelector("#city");
//         let temperatureElement = document.querySelector("#temperature");
//         let feelsElement = document.querySelector("#feels");
//         let humidityElement = document.querySelector("#humidity");
//         let windElement = document.querySelector("#wind");
//         let descriptionElement = document.querySelector("#description");
//         let iconElement = document.querySelector("#icon");

//         celsiusTemp = response.data.main.temp;

//         cityElement.innerHTML = response.data.name;

//         temperatureElement.innerHTML = Math.round(
//             celsiusTemp
//         );

//         feelsElement.innerHTML = Math.round(
//             response.data.main.feels_like
//         );
//         humidityElement.innerHTML = response.data.main.humidity;
//         windElement.innerHTML = Math.round(
//             response.data.wind.speed
//         );
//         descriptionElement.innerHTML =
//             response.data.weather[0].description;

//         iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
//         iconElement.setAttribute("alt", response.data.weather[0].description);

//         getForecast(response.data.coord);
//     }

//     function searchCity(city) {
//         let key = "eb9542c65e739e0fb25ade97c749e2aa";
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
//         axios.get(url).then(displayWeather);
//     }

//     function searchLocation(position) {
//         let key = "eb9542c65e739e0fb25ade97c749e2aa";
//         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=metric`;

//         axios.get(url).then(displayWeather);
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         let cityInputElement = document.querySelector("#input-city");
//         searchCity(cityInputElement.value);
//     }

//     function getCurrentLocation(event) {
//         event.preventDefault();
//         navigator.geolocation.getCurrentPosition(searchLocation);
//     }

//     let currentLocationButton = document.querySelector("#current_city");
//     currentLocationButton.addEventListener("click", getCurrentLocation);

//     function displayFahrenheitTemp(event) {
//         event.preventDefault();
//         celsiusLink.classList.remove("active");
//         fahrenheitLink.classList.add("active");
//         let tempElement = document.querySelector("#temperature");
//         let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
//         tempElement.innerHTML = Math.round(fahrenheitTemp);
//     }


//     function displayCelsiusTemp(event) {
//         event.preventDefault();
//         celsiusLink.classList.add("active");
//         fahrenheitLink.classList.remove("active");
//         let tempElement = document.querySelector("#temperature");
//         tempElement.innerHTML = Math.round(celsiusTemp);
//     }

//     let celsiusTemp = null;

//     let form = document.querySelector("#enter_city");
//     form.addEventListener("submit", handleSubmit);

//     let celsiusLink = document.querySelector("#celsius");
//     celsiusLink.addEventListener("click", displayCelsiusTemp);

//     let fahrenheitLink = document.querySelector("#fahrenheit");
//     fahrenheitLink.addEventListener("click", displayFahrenheitTemp);
//     searchCity("Kyiv");

// }