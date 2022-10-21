import React from "react";

const WeatherForecast = ({weatherData}) => {
  if (weatherData.ready) {
    return (
      <div className="px-6 pt-4 ">
        <div className="d-flex col justify-content-between px-6">
          <div> WIND: </div>
          <div id="wind"> {weatherData.wind} m/s</div>
        </div>
        <div className="d-flex col justify-content-between px-6">
          <div> HUMIDITY: </div>
          <div id="humidity"> {weatherData.humidity}%</div>
        </div>
        <br />
        <div className="col" id="forecast"></div>
      </div>
    );
  } else {

    return "Loading...";
  }
};
export default WeatherForecast;
