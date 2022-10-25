import React from "react";
import "./styles.css";

const WeatherInfo = ({ handleResponse, setCity, currentLocation }) => {
  return (
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
        onClick={currentLocation}
      >
        Current
      </div>
    </div>
  );
};

export default WeatherInfo;
