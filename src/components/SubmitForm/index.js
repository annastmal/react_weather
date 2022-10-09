import React from "react";
import "./styles.css";
function SubmitForm() {
  return (
    <div className=" row-12 d-flex py-3 ">
      <form className=" row-12 d-flex" id="signup-form">
        <input
          type="text"
          className="form-control mb-4 mt-4 m-3 pr-10"
          id="inputCity"
          name="inputCity"
          placeholder="Enter location..."
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
  );
}
export default SubmitForm;