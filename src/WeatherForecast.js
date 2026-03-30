import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast d-flex mt-4">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day mb-1">Mon</div>
          <WeatherIcon code="clear-sky-day" size={42} />
          <div className="WeatherForecast-temperatures mt-1">
            <span className="WeatherForecast-temperature-max ms-2">11°</span>
            <span className="WeatherForecast-temperature-min opacity-50 ms-2">
              3°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
