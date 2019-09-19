
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 16 - Conditional Rendering
/*---------------------------------------------------------------------------------
#1  cannot use if/else inside return, must be inside function/class

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import UserGreeting from "./components/UserGreeting";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <UserGreeting />
      </div>
    );
  }
}
export default App;

----------------
UserGreeting.js

class UserGreeting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    if(this.state.isLoggedIn) {
      return(
        <div>Welcome Vishwas</div>
      );
    } 
    else {
      return(
        <div>Welcome Guest</div>
      );
    }
  }
}
export default UserGreeting;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2  element variable approach

----------------
App.js

// no change

----------------
UserGreeting.js

import React, { Component } from "react";

class UserGreeting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    let message;
    if(this.state.isLoggedIn) {
      message = <div>Welcome Vishwas</div>
    } else {
      message = <div>Welcome Guest</div>
    }

    return <div>{message}</div>
  }

}
export default UserGreeting;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#3  can use ternary operator inside return

----------------
App.js

// no change

----------------
UserGreeting.js

import React, { Component } from "react";

class UserGreeting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    return(
      this.state.isLoggedIn ?
        (                             // if true
          <div>Welcome Vishwas</div>  
        ):(                           // if false
          <div>Welcome Guest</div>    
        )
    );
  }
}
export default UserGreeting;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#4  short-circuit 

----------------
App.js

// no change

----------------
UserGreeting.js

import React, { Component } from "react";

class UserGreeting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    //     if true               then do
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>
  }
}
export default UserGreeting;

---------------------------------------------------------------------------------*/