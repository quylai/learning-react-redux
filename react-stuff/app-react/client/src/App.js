import React, { Component } from "react";
import "./App.css";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <IntervalClassCounter />
        <IntervalHookCounter />

      </div>
    );
  }
}
export default App;

