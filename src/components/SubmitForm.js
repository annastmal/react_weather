import React, { useCallback, useState } from "react";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import WeatherDays from "./WeatherDays";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.css";

const SubmitForm = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  const getDailyWeather = useCallback((position) => {
    let apiKey = "916448310e3a306ffba91ecebe45fae4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((res) => {
      setWeatherData({
        ready: true,
        temperature: res.data.main.temp,
        city: res.data.name,
        description: res.data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
        date: new Date(res.data.dt * 1000),
        wind: res.data.wind.speed,
        humidity: res.data.main.humidity,
        coord: { lat: res.data.coord.lat, lon: res.data.coord.lon },
      });
    });
  }, []);

  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(getDailyWeather);
  }, [getDailyWeather]);

  const handleResponse = useCallback(async () => {
    const apiKey = "916448310e3a306ffba91ecebe45fae4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    await axios.get(apiUrl).then((res) => {
      setWeatherData({
        ready: true,
        temperature: res.data.main.temp,
        city: res.data.name,
        description: res.data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
        date: new Date(res.data.dt * 1000),
        wind: res.data.wind.speed,
        humidity: res.data.main.humidity,
        coord: { lat: res.data.coord.lat, lon: res.data.coord.lon },
      });
    });
  }, [city]);

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
          <WeatherTemperature celsius={weatherData.temperature} />
          <div className="sunny text-capitalize" id="currentWeather">
            {weatherData.description}
          </div>
        </div>
        <div className="col-8 secondary-data text-white ">
          <WeatherForecast weatherData={weatherData} />
          <WeatherDays weatherData={weatherData} />
          <WeatherInfo
            handleResponse={handleResponse}
            setCity={(city) => setCity(city)}
            currentLocation={getCurrentLocation}
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
