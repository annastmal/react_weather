import React from "react";

function WeatherForecast() {
  return (
    <div class="px-6 pt-4 ">
      <div class="d-flex col justify-content-between px-6">
        <div> WIND: </div>
        <div id="wind"> 2 m/s</div>
      </div>
      <div class="d-flex col justify-content-between px-6">
        <div> HUMIDITY: </div>
        <div id="humidity"> 6%</div>
      </div>
      <br />
      <div class="col" id="forecast"></div>
    </div>
  );
}
export default WeatherForecast;