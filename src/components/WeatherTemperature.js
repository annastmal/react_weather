import React, { useState } from "react";
import "./styles.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        <span id="tempNumber">{Math.round(props.celsius)}</span>
        <span className=" conversionC">°C </span>
        |
        <span >
          <span onClick={showFah} className="conversionF"> °F</span>
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span id="tempNumber">{Math.round(fahrenheit())}</span>
        <span >
          <span onClick={showCel} className="conversionF">°C</span > | <span   className="conversionF">°F</span>
        </span>{" "}
      </div>
    );
  }
}
