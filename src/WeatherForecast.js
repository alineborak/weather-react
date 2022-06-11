import React from 'react';
import "./WeatherForecast.css";
import WeatherIcon from './WeatherIcon';

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-12">
                    <div className="forecast-weekday">Sat</div>
                    <WeatherIcon code="01d" size={36} />
                </div>
            </div>
            <div className="min-max">
                <span className="temp-min"> 10° </span> | <span className="temp-max"> 15° </span>
            </div>
        </div>
    );
}