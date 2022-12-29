import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
 
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            {forecast.map((forecastDay,index) => {
              console.log({forecastDay})
              return <WeatherForecastDay key={index} forecastDay={forecastDay} />
            })}
          </div>
        </div>
      </div>
    );
  } else {
    
    let apiKey = "3423f9e30e80437oae320f8639950tb8";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
}

 