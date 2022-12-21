import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
   
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      imgUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
    
  }
if(weatherData.ready){
  return (
    <div className="Weather">
      <div className="Search">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a city..."
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary shadow-sm w-100 "
            />
          </div>
        </div>
      </div>
      <br />
      <h1>{weatherData.city}</h1>
      <br />
      <ul>
        <li>
          <FormattedDate date={weatherData.date}/>
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul> 
      <div className="row">
        <div className="col-7">
          <div className="d-flex weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <div>
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
} else {
  const apiKey = "3423f9e30e80437oae320f8639950tb8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..";
}
}
