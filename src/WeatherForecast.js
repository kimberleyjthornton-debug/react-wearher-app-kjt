import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
    console.log(props);
  }

  let apiKey = "o3d03f027be48ad05b5ec0c715cadt7d";
  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
