// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// import axios from "axios";

// export default function SearchEngine() {
//   const [city, setCity] = useState("");
//   const [temp, setTemp] = useState(null);
//   const [humidity, setHumidity] = useState();
//   const [wind, setWind] = useState();
//   const [description, setDiscription] = useState();
//   const [icon, setIcon] = useState();
//   let [load, setLoaded] = useState(false);

//   function showTemperature(response) {
//     setLoaded(true);
//     setTemp(response.data.main.temp);
//     setHumidity(response.data.main.humidity);
//     setDiscription(response.data.weather[0].description);
//     setWind(response.data.wind.speed);
//     setIcon(
//       `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
//     );
//   }

//   function handlerSubmit(event) {
//     event.preventDefault();
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bd326a60dc89a53287e446e819664df&units=metric`;
//     axios.get(url).then(showTemperature);
//   }

//   function updateInfo(event) {
//     setCity(event.target.value);
//   }

//   if (load) {
//     return (
//       <div className="container my-2">
//         <form className="enter-city" id="enter_city" onSubmit={handlerSubmit}>
//           <div className="col d-flex">
//             {/* <i className="icon fa-solid fa-location-dot fa-lg"></i> */}
//             <div className="py-1 d-flex justify-content-start">
//               <div className="py-1 d-flex justify-content-start">
//                 <input
//                   type="search"
//                   onChange={updateInfo}
//                   placeholder="Enter a city.."
//                   id="input-city"
//                   autocomplete="off"
//                 />
//               </div>
//               <div className="py-1 px-2 d-flex justify-content-center align-items-center">
//                 <Button
//                   variant="text"
//                   type="submit"
//                   value="Search"
//                   className="btn py-1 px-2"
//                 >
//                   Search{" "}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </form>{" "}
//         {
//           <div>
//             <h2>
//               The weather in {city.charAt(0).toUpperCase() + city.slice(1)} is:{" "}
//             </h2>
//             <ul>
//               <li>Temperature: {Math.round(temp)}°C</li>
//               <li>Description: {description}</li>
//               <li>Humidity: {Math.round(humidity)} %</li>
//               <li>Wind: {Math.round(wind)} km/h</li>
//             </ul>
//             <div className="py-0 d-flex">
//               {" "}
//               <img src={icon} alt="weather-icon" />
//             </div>
//           </div>
//         }
//       </div>
//     );
//   } else {
//     return (
//       <div className="container my-2">
//         <h3>Weather App</h3>
//         <form className="enter-city" id="enter_city" onSubmit={handlerSubmit}>
//           <div className="col d-flex">
//             {/* <i className="icon fa-solid fa-location-dot fa-lg"></i> */}
//             <div className="py-1 d-flex justify-content-start">
//               <div className="py-1 d-flex justify-content-start">
//                 <input
//                   type="search"
//                   onChange={updateInfo}
//                   placeholder="Enter a city.."
//                   id="input-city"
//                   autocomplete="off"
//                 />
//               </div>
//               <div className="py-1 px-2 d-flex justify-content-center align-items-center">
//                 <Button
//                   variant="text"
//                   type="submit"
//                   value="Search"
//                   className="btn py-1 px-2"
//                 >
//                   Search{" "}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </form>{" "}
//       </div>
//     );
//   }
// }




// export default function SearchEngine(props) {
//   let [city, setCity] = useState("");
//   let [temp, setTemp] = useState(" ");

//   function handlerSubmit(event) {
//     event.preventDefault();
//     let temp = `It's currently 7°C in in ${city}`;
//     setTemp(temp);
//   }

//   function updateInfo(event) {
//     setCity(event.target.value);
//   }

//   return (
//     <div className="container my-2">
//       <form className="enter-city" id="enter_city" onSubmit={handlerSubmit}>
//         <div className="col d-flex">
//           {/* <i className="icon fa-solid fa-location-dot fa-lg"></i> */}
//           <div className="py-1 d-flex justify-content-start">
//             <div className="py-1 d-flex justify-content-start">
//               <input
//                 type="search"
//                 onChange={updateInfo}
//                 placeholder="Enter a city.."
//                 id="input-city"
//                 autocomplete="off"
//               />
//             </div>
//             <div className="py-1 px-2 d-flex justify-content-center align-items-center">
//               <Button
//                 variant="text"
//                 type="submit"
//                 value="Search"
//                 className="btn py-1 px-2"
//               >
//                 Search{" "}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </form>{" "}
//       <p>{temp}</p>
//     </div>
//   );
// }
