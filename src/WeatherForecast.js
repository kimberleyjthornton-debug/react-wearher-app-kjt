import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, forecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    console.log(response.data);
    console.log(props);
    forecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast d-flex mt-4">
        <div className="row me-2">
          {forecast.slice(0, 5).map(function (dailyForecast, index) {
            return (
              <div className="col ms-1" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "o3d03f027be48ad05b5ec0c715cadt7d";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
