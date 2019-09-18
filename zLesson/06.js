
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 6 - Class Components
/*---------------------------------------------------------------------------------
#0  class are revision of prototype-based inheritance by ECMAScript 2015

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}
export default App;

----------------
Welcome.js

import React, { Component } from "react";

class Welcome extends Component {

  render() {
    return <h1>Class Component</h1>
  }
}
export default Welcome;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
characteristics of class component:

- more feature rich
- maintain their own private data - state
- complex UI logic
- provide lifecycle hooks
- stateful / smart / container

---------------------------------------------------------------------------------*/
