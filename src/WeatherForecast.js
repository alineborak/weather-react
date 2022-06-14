import React, { useState } from 'react';
import "./WeatherForecast.css";
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);


    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast)
        return (
            <div className="WeatherForecast">
                <WeatherForecastDay data={forecast[0]} />
                <WeatherForecastDay data={forecast[1]} />
            </div>
        );
    } else {
        const apiKey = "e7cbdac60bcd411a2f4fc9a688973feb";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }

}