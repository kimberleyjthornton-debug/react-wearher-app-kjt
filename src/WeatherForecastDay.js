import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day mb-1">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={42} />
      <div className="WeatherForecast-temperatures mt-1">
        <span className="WeatherForecast-temperature-max ms-2">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min opacity-50 ms-2">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
