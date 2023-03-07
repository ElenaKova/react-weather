
// import Loader from "react-loader-spinner";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import axios from "axios";
// import Search from "./Search";
// import SearchEngine from "./SearchCity";
// import ReactAnimatedWeather from 'react-animated-weather';
import "./App.css";
import CurrentInfo from "./CurrentMain";


export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    // setLoaded(true);
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
    });
  }
    // setIcon(
    //   `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    // );
  
  function handlerSubmit(event) {
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
      <div className="container my-2">
        <form className="enter-city" id="enter_city" onSubmit={handlerSubmit}>
          <div div className = "col d-flex" >
            {/* <i className="icon fa-solid fa-location-dot fa-lg"></i> */}
            <div className="py-1 d-flex justify-content-start">
              <div className="py-1 d-flex justify-content-start">
                <input
                  type="search"
                  onChange={updateCity}
                  placeholder="Enter a city.."
                  id="input-city"
                  autocomplete="off"
                />
              </div>
              <div className="py-1 px-2 d-flex justify-content-center align-items-center">
                <Button
                  variant="text"
                  type="submit"
                  value="Search"
                  className="btn py-1 px-2"
                >
                  🔍{" "}
                </Button>
              </div>
              {/* <div className="py-1 px-2 d-flex justify-content-center align-items-center">
                <Button Button variant = "text"
                  value = "Search"
                  type = "submit"
                  className = "btn py-1 px-2"
                      id="current_city"
                    >
                    Current
                </Button>
              </div> */}
            </div>
          </div>
        </form>{" "}
        <CurrentInfo data={weatherData} />
      </div>
    );
  } else {
      search();
    return "Loading...";
    
    // return (
    //   <div className="container my-2">
    //     <form className="enter-city" id="enter_city" onSubmit={handlerSubmit}>
    //       <div className="col d-flex ">
    //         {/* <i className="icon fa-solid fa-location-dot fa-lg"></i> */}
    //         <div className="py-1 d-flex justify-content-start">
    //           <div className="py-1 d-flex justify-content-start">
    //             <input
    //               type="search"
    //               onChange={updateCity}
    //               placeholder="Enter a city.."
    //               id="input-city"
    //               autocomplete="off"
    //             />
    //           </div>
    //           <div className="py-1 px-2 d-flex justify-content-center align-items-center">
    //             <Button
    //               variant="text"
    //               type="submit"
    //               value="Search"
    //               className="btn py-1 px-2"
    //             >
    //               Search{" "}
    //             </Button>
    //           </div>
    //             <div className="py-1 px-2 d-flex justify-content-center align-items-center">
    //             <Button Button variant = "text"
    //               value = "Search"
    //               type = "submit"
    //               className = "btn py-1 px-2"
    //                   id="current_city"
    //                 >
    //                 Current
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </form>{" "}
    //   </div>
    // );
  }
}



// export default function Search() {
//   return (
//     <div>
//       <div className="container my-2">
//         <form className="enter-city" id="enter_city">
//           <div className="col d-flex">
//             <i className="icon fa-solid fa-location-dot fa-lg"></i>
//             <div className="py-1 d-flex justify-content-start">
//               <input
//                 className="form-control input-lg"
//                 type="search"
//                 id="input-city"
//                 placeholder="Enter a city.."
//                 autocomplete="off"
//               />
//             </div>
//             <div className="py-1 px-2 d-flex justify-content-center align-items-center">
//               <button type="submit" className="btn py-1 px-2" id="search">
//                 Search
//               </button>
//             </div>
            // <div className="py-1 px-2 d-flex justify-content-center align-items-center">
            //   <button type="submit" className="btn py-1 px-2" id="current_city">
            //     Current
            //   </button>
            // </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
