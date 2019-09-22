
//---------------------------------------------------------------------------------
"keyboard commands";{
/*---------------------------------------------------------------------------------
- Ctrl+k+0  folds all regions in the editor
- Ctrl+k+j  unfolds all regions in the editor
---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"";{
/*---------------------------------------------------------------------------------
#0 asdf

--------------------------------
App.js



---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 05 - Functional Components";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}
export default App;

--------------------------------
Greet.js

import React from "react";

const Greet = () => <h1>Quy's in da-house...</h1>

export default Greet;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
considerations of functional component: 

- simple functions
- should be used as much as possible
- absense of "this" keyword
- solution without using state
- mainly responsible for the UI
- stateless / dumb / presentational

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 06 - Class Components";{
/*---------------------------------------------------------------------------------
#0  class are revision of prototype-based inheritance by ECMAScript 2015

--------------------------------
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

--------------------------------
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
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 11 - setState";{
/*---------------------------------------------------------------------------------
#0 setState - a request to update component

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}
export default App;

--------------------------------
Counter.js

import React, { Component } from "react"

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }

  increment() {

    this.setState(prevState => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count);  // 5
  }
  
  incrementFive() {
    this.increment();   // 0
    this.increment();   // 0 
    this.increment();   // 0 
    this.increment();   // 0 
    this.increment();   // 0
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
export default Counter;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 12 - Destructuring props and state";{
/*---------------------------------------------------------------------------------
#1 function component, destructuring in parameter

--------------------------------
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

--------------------------------
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
#2 functional component, destructuring in the body

--------------------------------
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

--------------------------------
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
#3 class component, destructuring in render method

--------------------------------
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

--------------------------------
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
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 13 - Event Handling";{
/*---------------------------------------------------------------------------------
#1 even handling with function

--------------------------------
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

--------------------------------
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
#2 event handling with class

--------------------------------
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

--------------------------------
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
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 14 - Binding Event Handlers";{
/*---------------------------------------------------------------------------------
#1 binding in the render method, performance issue in large scale

--------------------------------
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

--------------------------------
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
#2 binding by using function arrow in render() method

--------------------------------
App.js

// no changed

--------------------------------
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
#3 binding in the class constructor, recommended

--------------------------------
App.js

// no changed

--------------------------------
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
#4 binding by using class properties as arrow function, recommended

--------------------------------
App.js

// no changed

--------------------------------
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
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 15 - Methods as props";{
/*---------------------------------------------------------------------------------
#0 passing data between child/parent

--------------------------------
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

--------------------------------
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

--------------------------------
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
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 16 - Conditional Rendering";{
/*---------------------------------------------------------------------------------
#1 cannot use if/else inside return, must be inside function/class

--------------------------------
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

--------------------------------
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
#2 element variable approach

--------------------------------
App.js

// no change

--------------------------------
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
#3 can use ternary operator inside return

--------------------------------
App.js

// no change

--------------------------------
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
#4 short-circuit 

--------------------------------
App.js

// no change

--------------------------------
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
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 17 - List Rendering";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import NameList from "./components/NameList";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NameList />
      </div>
    );
  }
}
export default App;

--------------------------------
NameList.js

import React from "react";
import Person from "./Person";

function NameList() {

  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    }, {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular"
    }, {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue"
    }
  ];

  const personList = persons.map(person => <Person person={person} />);
  return <div>{personList}</div>
}
export default NameList;

--------------------------------
Person.js

import React from "react";

function Person({person}) {
  return(
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old.  I know {person.skill}.
      </h2>  
    </div>
  );
}
export default Person;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 18 - Lists and Keys";{
/*---------------------------------------------------------------------------------
#0 demonstrating "key" attribute is needed for list items

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import NameList from "./components/NameList";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NameList />
      </div>
    );
  }
}
export default App;

--------------------------------
NameList.js

import React from "react";
import Person from "./Person";

function NameList() {

  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    }, {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular"
    }, {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue"
    }
  ];

  const personList = persons.map(person => <Person key={person.id} person={person} />);
  return <div>{personList}</div>
}
export default NameList;

--------------------------------
Person.js

import React from "react";
function Person({person}) {
  return(
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old.  I know {person.skill}.
      </h2>  
    </div>
  );
}
export default Person;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
the only differences in codings of this one from previous activity is syntax
"key" in NameList.js; React use this as an identifier if DOM has changed

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 19 - Index as Key Anti-pattern";{
/*---------------------------------------------------------------------------------
#0 asdf 

going over the importance of using "key" value in a list components

---------------------------------------------------------------------------------*/
}
  
//---------------------------------------------------------------------------------
"ReactJS Tutorial - 20 - Styling and CSS Basics";{
/*---------------------------------------------------------------------------------
#1 apply styling via class

--------------------------------
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

--------------------------------
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

--------------------------------
myStyle.css

.primary {
  color: orange;
}

.font-xl {
  font-size: 72px;
}

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 inline styling

--------------------------------
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

--------------------------------
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
#3 css module (min. react-scripts 2.0.0)

--------------------------------
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

--------------------------------
appStyles.css

.error {
  color: red;
}

--------------------------------
appStyles.module.css

.success {
  color: green;
}

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 21 - Basics of Form Handling";{
/*---------------------------------------------------------------------------------
#0 simple form

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}
export default App;

--------------------------------
Form.js

import React, { Component } from "react";
export class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      commments: "",
      topic: "react"
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }  

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    })
  }

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            type="text"
            value={this.state.username} 
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.top}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default Form;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 7 - useEffect after render";{
/*---------------------------------------------------------------------------------
#1 useEffect equivalent in class

--------------------------------
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

--------------------------------
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
#2 useEffect of function

--------------------------------
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

--------------------------------
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
}
  


