import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <br />
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} size={52} />

            <div>
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}