import React, { useState, useEffect } from 'react';
import "./WeatherForecast.css";
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast)
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>



                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        let apiKey = "e7cbdac60bcd411a2f4fc9a688973feb";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }

}