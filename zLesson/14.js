
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 14 - Binding Event Handlers
/*---------------------------------------------------------------------------------
#1  binding in the render method, performance issue in large scale

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import EventBind from "./components/EventBind";


class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind />
      </div>
    );
  }
}
export default App;

----------------
EventBind.js

import React, { Component } from 'react';

class EventBind extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      message: "Hello"
    }
  }
  
  clickHandler() {
    this.setState({
      message: "Goodbye!"
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}
export default EventBind;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2  binding by using function arrow in render() method

----------------
App.js

// no changed

----------------
EventBind.js

import React, { Component } from 'react';

class EventBind extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      message: "Hello"
    }
  }
  
  clickHandler() {
    this.setState({
      message: "Goodbye!"
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    );
  }
}
export default EventBind;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#3  binding in the class constructor, recommended

----------------
App.js

// no changed

----------------
EventBind.js

import React, { Component } from 'react';

class EventBind extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      message: "Hello"
    }
    this.clickHandler = this.clickHandler.bind(this);  // added
  }
  
  clickHandler() {
    this.setState({
      message: "Goodbye!"
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
        </div>
    );
  }
}
export default EventBind;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#4  binding by using class properties as arrow function, recommended

----------------
App.js

// no changed

----------------
EventBind.js

import React, { Component } from 'react';

class EventBind extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      message: "Hello"
    }
  }
  
  clickHandler = () => {  //a
    this.setState({
      message: "Goodbye"
    });

  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
        </div>
    );
  }
}
export default EventBind;

---------------------------------------------------------------------------------*/

