import React from "react";
import "./style.css";

const ABtn = ({handleFormSubmit}) => {
  return(
    <button type="submit" onClick={handleFormSubmit} className="btn btn-success">
      Submit
    </button>
  );
}
export default ABtn;

