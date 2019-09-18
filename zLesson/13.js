
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 13 - Event Handling
/*---------------------------------------------------------------------------------
#1  even handling with function

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import FunctionClick from "./components/FunctionClick";


class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
      </div>
    );
  }
}
export default App;

----------------
FunctionClick.js

import React from "react";

function FunctionClick() {

  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
export default FunctionClick;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2  event handling with class

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import ClassClick from "./components/ClassClick";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassClick />
      </div>
    );
  }
}
export default App;

----------------
ClassClick.js

import React, { Component } from 'react';

class ClassClick extends Component {

  clickHandler() {
    console.log("Clicked the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}
export default ClassClick

---------------------------------------------------------------------------------*/

