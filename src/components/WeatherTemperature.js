import React, { useState } from "react";

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
        <span>
          °C |{" "}
          <a href="" onClick={showFah}>
            °F
          </a>
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span id="tempNumber">{Math.round(fahrenheit())}</span>
        <span>
          <a href="" onClick={showCel}>
            °C
          </a>
          | °F
        </span>{" "}
      </div>
    );
  }
}
