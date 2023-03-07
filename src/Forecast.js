import React,{useState, useEffect} from "react";
import ShowForecast from "./DayForecast";
import axios from "axios";

import "./App.css"

export default function BlockForecast(props) {
    let [loader, setLoader] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect(() => {
        setLoader(false);
    }, [props.coordinates]);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoader(true);
    }

    function searchForecast() {
        let key = "eb9542c65e739e0fb25ade97c749e2aa";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
        axios.get(url).then(handleResponse);
    }

    if (loader) {
        return (           
                <section className="inner-box">
                <div class="box-day" >
                    <div div class = "container inner-box-day d-flex" >
                        <div class="day-of-week align-items-center ">
                            {forecast.map(function (daily, idx) {
                                if (idx < 7) {
                                    return (
                                        <div className="day-of-week align-items-center " key={idx}>
                                            <ShowForecast data={daily} />
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>  
                </div>
            </section>
        );
    } else {
        searchForecast();
        return null;
    }
}