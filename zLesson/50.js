//---------------------------------------------------------------------------------
// React Hooks Tutorial - 7 - useEffect after render
/*---------------------------------------------------------------------------------
#1  useEffect of function equivalency in class

----------------
App.js

import React from "react";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";

function App() {

  return( 
    <div className="App">
      <ClassCounterOne />
    </div>
  );
}
export default App;

----------------
ClassCounterOne.js

import React, { Component } from 'react';

class ClassCounterOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`
  }

  render() {
    return(
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count.count} times
        </button>
      </div>
    )
  }
}
export default ClassCounterOne;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2  useEffect of function

----------------
App.js

import React from "react";
import "./App.css";
import HookCounterOne from "./components/HookCounterOne";

function App() {
  return( 
    <div className="App">
      <HookCounterOne />
    </div>
  );
}

export default App;

----------------
HookCounterOne.js

import React, { useState, useEffect } from 'react';

function HookCounterOne() {

  const[count, setCount] = useState(0);
  useEffect(()=> {
    document.title = `You clicked ${count} times`
  });

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
---------------------------------------------------------------------------------*/
