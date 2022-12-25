import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  // eslint-disable-next-line
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      imgUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }
    // eslint-disable-next-line
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
    // eslint-disable-next-line
    function handleCityChange(event) {
      setCity(event.target.value);
    }
 
    function search() {
      const apiKey = "3423f9e30e80437oae320f8639950tb8";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoComplete="off"
                className="form-control shadow-sm"
                autoFocus="on"
                onChange={handleCityChange}
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
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <br />
      </div>
    );
  } else {
    // eslint-disable-next-line
     search();
    return "Loading..";
    
  }
}
