import React from "react";
import "./styles.css";

function WeatherCard() {
  return (
    <div
      className="col-4  p-3  bg-image text-right  rounded main-data clouds"
      id="leftContainer"
    >
      <div className="city">
        <span className="material-symbols-outlined">place</span>
        <span id="cityName">Lviv</span>
      </div>
      <div id="main-date"></div>
      <p id="main-day"></p>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt=""
        width="100px"
        id="icon"
        className="main-img"
      />
      <div className="temperature">
        <span id="tempNumber">29</span>
        <span>°C</span>{" "}
      </div>
      <div className="sunny" id="currentWeather">
        Sunny
      </div>
    </div>
  );
}

export default WeatherCard;