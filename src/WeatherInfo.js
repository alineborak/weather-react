import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="weather-info">
            <div className="overview">
                <h2 className="heading" id="city">
                    {props.data.city}
                </h2>
                <ul>
                    <li id="current-condition" className="text-capitalize">
                        {props.data.description}
                    </li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix weather-icon">
                            <div className="float-left">
                                <WeatherIcon code={props.data.icon} size={75} />
                            </div>

                            <div className="float-left">
                                <strong id="temperature-degree">
                                    {Math.round(props.data.temperature)}
                                </strong>
                                <span className="units">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <span>
                            <ul id="additional-info">
                                <li>
                                    Feels like: <span id="feels-like">{Math.round(props.data.feel)}</span>°C
                                </li>
                                <li>
                                    Humidity: <span id="humidity">{props.data.humidity}</span>%
                                </li>
                                <li>
                                    Wind Speed: <span id="wind-speed">{Math.round(props.data.wind)}</span>{" "}
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
