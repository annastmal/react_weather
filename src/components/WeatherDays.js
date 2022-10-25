import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const WeatherDays = ({ weatherData }) => {
  const [daily, setDaily] = useState({ ready: false, dailies: [] });
  const getDailyWeather = useCallback((data) => {
    let apiKey = "916448310e3a306ffba91ecebe45fae4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((res) => setDaily({ ready: true, dailies: res.data.daily }));
  }, []);
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  useEffect(() => {
    getDailyWeather(weatherData);
  }, [weatherData]);

  if (daily.ready) {
    return (
      <div className="d-flex row-12 p-2 ">
        {daily.dailies.map((forecastDay, index) => {
          if (index < 5) {
            console.log(forecastDay);
            return (
              <div
                key={index}
                className=" boxWidth container  p-3  border weather-forecast"
              >
                <div className=" align-content-center">
                  <img
                    className="forecast-days"
                    src={`http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`}
                    alt=""
                    classNameName="material-symbols-outlined"
                    width="42"
                  />
                  <span>{forecastDay.weather[0].main.toLowerCase()}</span>
                  <div>{formatDay(forecastDay.dt)}</div>
                  <div>{Math.round(forecastDay.temp.max)}°C</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return null;
  }
};
export default WeatherDays;
