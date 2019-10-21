import React, { Component } from "react";

const data = require("../data/testZ");  // getting data from json file

class TestComp extends Component {

  render() {
    // console.log(data[0]);  //db




    const dataList = data.map(aLand => {
      console.log(aLand);  //db
    });

    return(
      <div>
      </div>
    );
  }
}
export default TestComp;

