import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);


  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
 
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          
            {forecast.map((forecastDay,index) => {
                if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecastDay={forecastDay} />
                </div>
              );
                } else {
                  return null;
                }
            })}
          
        </div>
      </div>
    );
  } else {
    
    let apiKey = "3423f9e30e80437oae320f8639950tb8";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
}

 