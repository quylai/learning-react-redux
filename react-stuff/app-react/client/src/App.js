import React, { Component } from "react";
import "./App.css";
import TestComp from "./components/TestComp";

class App extends Component {
  render() {
    return(
      <div className="App">
        <TestComp name="Bruce" heroName="Batman" />
      </div>
    );
  }
}
export default App;
