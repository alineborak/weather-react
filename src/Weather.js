import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
        city: "Rotterdam",
        temperature: 16,
        feel: 12,
        date: "Tuesday 10:00",
        description: "Clear",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        humidity: 80,
        wind: 10
    };

    return (
        <div className="weather-app">
            <h1>WEATHER BUG</h1>
            <form action="" id="search-form">
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Enter city name"
                            className="form-control"
                            id="city-input"
                            autocomplete="off"
                        />
                    </div>
                    <div className="col-3">
                        <input
                            className="btn btn-primary"
                            id="search-btn"
                            type="submit"
                            value="Search"
                        />
                    </div>
                </div>
            </form>
            <div className="overview">
                <h2 className="heading" id="city">
                    {weatherData.city}
                </h2>
                <ul>
                    <li id="date">Friday 17:00</li>
                    <li id="current-condition">{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix weather-icon">
                            <img
                                id="icon"
                                src={weatherData.imgUrl}
                                alt="cloudy"
                                className="float-left"
                            />
                            <div className="float-left">
                                <strong id="temperature-degree">
                                    {weatherData.temperature}
                                </strong>
                                <span className="units">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <span>
                            <ul id="additional-info">
                                <li>
                                    Feels like: <span id="feels-like">{weatherData.feel}</span>°C
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
}
