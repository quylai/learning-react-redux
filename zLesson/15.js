
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 15 - Methods as props
/*---------------------------------------------------------------------------------
#0  passing data between child/parent

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
      </div>
    );
  }
}
export default App;

----------------
ParentComponent.js

import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      parentName: "Parent"
    }
    this.greetParent = this.greetParent.bind(this);
  }
  
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}
export default ParentComponent;

----------------
ChildComponent.js

import React from 'react';

function ChildComponent(props) {
  return(
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}
export default ChildComponent;

---------------------------------------------------------------------------------*/

