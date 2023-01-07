import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <br />
      <h2>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </h2>
      <div className="row">
        <div className="col-7">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} size={82} />

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}