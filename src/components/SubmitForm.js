import React, { useCallback, useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.css";

const SubmitForm = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  const handleResponse = useCallback(() => {
    const apiKey = "730149abe07b6fb8812c0064d5d5897c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((res) => {
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
    });
  }, [weatherData, city]);

  if (weatherData.ready) {
    return (
      <>
        <div
          className="col-4 p-3 bg-image text-right rounded main-data clouds"
          id="leftContainer"
        >
          <div className="city">
            <LocationOnIcon />
            <span id="cityName">{weatherData.city}</span>
          </div>
          <div id="main-date">
            <FormattedDate date={weatherData.date} />
          </div>
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
          <WeatherInfo
            handleResponse={handleResponse}
            setCity={(city) => setCity(city)}
          />
        </div>
      </>
    );
  } else {
    handleResponse();
    return "Loading...";
  }
};

export default SubmitForm;
