import React, { useCallback, useState } from "react";
import WeatherForecast from "../WeatherForecast";
import FormattedDate from "../FormattedDate";
import axios from "axios";
import "./styles.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SubmitForm = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  const handleResponse = useCallback((res) => {
    setWeatherData({
      ready: true,
      temperature: res.data.main.temp,
      city: res.data.name,
      description: res.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(res.data.dt * 1000),
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
    });
  }, []);
  if (weatherData.ready) {
    return (
      <>
        <div
          className="col-4  p-3  bg-image text-right  rounded main-data clouds"
          id="leftContainer"
        >
          <div className="city">
            <LocationOnIcon />
            <span id="cityName">{weatherData.city}</span>
          </div>
          <div id="main-date">
            <FormattedDate  date={weatherData.date}/></div>
          <p id="main-day"></p>
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            width="100px"
            id="icon"
            className="main-img"
          />
          <div className="temperature">
            <span id="tempNumber">{Math.round(weatherData.temperature)}</span>
            <span>°C</span>{" "}
          </div>
          <div className="sunny text-capitalize" id="currentWeather">
            {weatherData.description}
          </div>
        </div>
        <div className="col-8 secondary-data text-white ">
          <WeatherForecast weatherData={weatherData} />
          <div className=" row-12 d-flex py-3 ">
            <form
              className=" row-12 d-flex"
              id="signup-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleResponse();
              }}
            >
              <input
                type="text"
                className="form-control mb-4 mt-4 m-3 pr-10"
                id="inputCity"
                name="inputCity"
                placeholder="Enter location..."
                onChange={(e) => {
                  e.preventDefault();
                  setCity(e.target.value);
                }}
                required
              />
              <input
                type="submit"
                value="Change"
                className="button-change mb-4 mt-4 pr-10"
              />
            </form>
            <div
              type="button"
              id="currentPosition"
              className="button-current mb-4 mt-4 pr-10 "
            >
              Current
            </div>
          </div>
        </div>
      </>
    );
  } else {
    const apiKey = "730149abe07b6fb8812c0064d5d5897c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((res) => {
      handleResponse(res);
    });
    return "Loading...";
  }
};

export default SubmitForm;
