

import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Bruce" heroName="Batman" />
      </div>
    );
  }
}

export default App;
