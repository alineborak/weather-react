import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            time: "Tuesday 10:00",
            city: response.data.name,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            feel: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="weather-app">
                <p id="date">{weatherData.time}</p>
                <form onSubmit={handleSubmit} action="" id="search-form">
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter city name"
                                className="form-control"
                                id="city-input"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                className="btn btn-primary w-100"
                                id="search-btn"
                                type="submit"
                                value="Search"
                            />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
            </div>
        );
    } else {
        const apiKey = "384781b633046620eaed677419a0ac6e";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return ("Loading...");
    }
}