
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 20 - Styling and CSS Basics
/*---------------------------------------------------------------------------------
#1  apply styling via class

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import Stylesheet from "./components/Stylesheet";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Stylesheet primary={true} />
      </div>
    );
  }
}
export default App;


----------------
Stylesheet.js

import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
    let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet;

----------------
myStyle.css

.primary {
  color: orange;
}

.font-xl {
  font-size: 72px;
}

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2  inline styling

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import Inline from "./components/Stylesheet";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Inline />
      </div>
    );
  }
}
export default App;

----------------
Inline.js

import React from "react"

const heading = {
  fontSize: "72px",
  color: "blue"
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}
export default Inline;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#3  css module (min. react-scripts 2.0.0)

----------------
App.js

import React, { Component } from "react";
import "./App.css";
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
    );
  }
}
export default App;

----------------
appStyles.css

.error {
  color: red;
}

----------------
appStyles.module.css

.success {
  color: green;
}

---------------------------------------------------------------------------------*/
