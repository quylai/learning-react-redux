import React, { Component } from "react";

const data = require("../data/testZ");
// const jsonObj = JSON.parse(data);

class TestComp extends Component {

  render() {
    console.log(data[0]);  //db
    const {name, heroName} = this.props;
    return(
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}
export default TestComp;

