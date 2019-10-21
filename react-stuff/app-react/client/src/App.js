import React, { Component } from "react";
import "./App.css";
import TestComp from "./components/TestComp";

class App extends Component {
  render() {
    return(
      <div className="App">
        <TestComp />
      </div>
    );
  }
}
export default App;
