import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
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

    if (weatherData.ready) {
        return (
            <div className="weather-app">
                <p id="date">{weatherData.time}</p>
                <div className="search-engine">
                    <form action="" id="search-form">
                        <div className="row">
                            <div className="col-9">
                                <input
                                    type="search"
                                    placeholder="Enter city name"
                                    className="form-control"
                                    id="city-input"
                                    autocomplete="off"
                                    autoFocus="on"
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
                </div>
                <div className="overview">
                    <h2 className="heading" id="city">
                        {weatherData.city}
                    </h2>
                    <ul>
                        <li id="current-condition" className="text-capitalize">
                            {weatherData.description}
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-6">
                            <div className="clearfix weather-icon">
                                <img
                                    id="icon"
                                    src={weatherData.iconUrl}
                                    alt="cloudy"
                                    className="float-left"
                                />
                                <div className="float-left">
                                    <strong id="temperature-degree">
                                        {Math.round(weatherData.temperature)}
                                    </strong>
                                    <span className="units">°C</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <span>
                                <ul id="additional-info">
                                    <li>
                                        Feels like: <span id="feels-like">{Math.round(weatherData.feel)}</span>°C
                                    </li>
                                    <li>
                                        Humidity: <span id="humidity">{weatherData.humidity}</span>%
                                    </li>
                                    <li>
                                        Wind Speed: <span id="wind-speed">{weatherData.wind}</span>{" "}
                                        km/h
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="weather-forecast" id="forecast"></div>
            </div>
        );
    } else {
        const apiKey = "384781b633046620eaed677419a0ac6e";
        let city = "Rotterdam";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return ("Loading...");
    }
}