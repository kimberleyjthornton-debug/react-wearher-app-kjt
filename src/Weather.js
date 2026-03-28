import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-search-bar"
          />
          <input
            type="button"
            value="Search"
            className="search-form-button d-inline-block"
          />
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Saturday 07:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_day_light.svg"
            alt="Mostly Cloudy"
          />
          10°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 25%</li>
            <li>Humidity: 44%</li>
            <li>Wind: 12 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
