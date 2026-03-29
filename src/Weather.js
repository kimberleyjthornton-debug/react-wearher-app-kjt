import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather() {
  let city = "Moscow";
  const [completed, executeCompleted] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      pressure: response.data.temperature.pressure,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });

    executeCompleted(true);
  }

  if (completed) {
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
              className="search-form-button"
            />
          </div>
        </form>
        <h1>{city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                size={60}
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 mt-4">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
              <li>Pressure: {Math.round(weatherData.pressure)} hPa</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "o3d03f027be48ad05b5ec0c715cadt7d";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
