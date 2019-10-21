import React, { Component } from "react";

const data = require("../data/testZ");  // getting data from json file

class TestComp extends Component {

  render() {




    const dataList = data.map(aLand => {
      return(
        <li>{aLand.image}</li>
      );
    });

    return(
      <div>
        {dataList}
      </div>
    );
  }
}
export default TestComp;

