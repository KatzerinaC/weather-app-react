import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
function maxTemperature() {
    let temperature = Math.round(props.forecastDay.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastDay.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastDay.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }
  return(
    <div>
   <div className="WeatherForecast-day">{day()}</div>
            <div className="d-flex justify-content-center align-items-center ">
        <img
          src={props.forecastDay.condition.icon_url}
          alt={props.forecastDay.condition.description}
          className="forecast-icon"
          width="90"
          height="90"
        />
      </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                 {maxTemperature()}
              </span>
              <span className="WeatherForecast-temperature-min">
             {minTemperature()}
              </span>
            </div>
       </div>     
  );
}


