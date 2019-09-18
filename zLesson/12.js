
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 12 - Destructuring props and state
/*---------------------------------------------------------------------------------
#1  function component, destructuring in parameter

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Diana" heroName="Wonder Woman" />
      </div>
    );
  }
}
export default App;

----------------
Greet.js

import React from "react";

const Greet = ({name, heroName}) => {

  return(
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
}
export default Greet;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2  functional component, destructuring in the body

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Diana" heroName="Wonder Woman" />
      </div>
    );
  }
}
export default App;

----------------
Greet.js

import React from "react";

const Greet = props => {

  const {name, heroName} = props;
  return(
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
}
export default Greet;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#3  class component, destructuring in render method

----------------
App.js

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

----------------
Welcome.js

import React, { Component } from 'react';

class Welcome extends Component {

  render() {
    const {name, heroName} = this.props;
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}
export default Welcome;

---------------------------------------------------------------------------------*/

