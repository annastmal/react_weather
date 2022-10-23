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
          <span onClick={showFah}>
            °F
          </span>
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span id="tempNumber">{Math.round(fahrenheit())}</span>
        <span>
          <span onClick={showCel}>
            °C
          </span>
          | °F
        </span>{" "}
      </div>
    );
  }
}
