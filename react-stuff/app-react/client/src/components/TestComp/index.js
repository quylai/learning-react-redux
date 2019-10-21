import React, { Component } from "react";
import "./style.css";


const data = require("../../data/testZ");  // getting data from json file


class TestComp extends Component {

  render() {

    const dataList = data.map(aLand => {
      return(
        // <button key={aLand.id} className="card">
        <button key={aLand.id} className="btn">
          <img src={aLand.image} className="card-img-center" alt="dotdotdot" />
      
        </button>
      );
    });

    return(
      <div className="row">
        {dataList}
      </div>
    );
  }
}
export default TestComp;

