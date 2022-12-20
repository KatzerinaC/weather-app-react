import React from "react";


export default function Weather() {
  let weatherData = {
    city: "Berlin",
    date: " Sunday 15:00",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    Humidity: 20,
    Wind: 25,
    temperature: 22,
  };
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
        <li>Last updated:{weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <div className="d-flex weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <div>
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity:{weatherData.Humidity}%</li>
            <li>Wind: {weatherData.Wind} km/h</li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}
