
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
/*---------------------------------------------------------------------------------
STORY

app objective:


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
"ReactJS Tutorial - 10 - State";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import Message from "./components/Message";

class App extends Component {
    
  render() {
    return(
      <div className="App">
        <Message />
      </div>
    );
  }
}
export default App;

--------------------------------
Message.js

import React, { Component } from "react";
class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: "Welcome visitor"
    }
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing"
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subsribe</button>
      </div>
    );
  }
}
export default Message;

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
"ReactJS Tutorial - 22 - Component Lifecycle Methods";{
/*---------------------------------------------------------------------------------
--------------------------------

- mounting - when an instance of a component is being created and inserted into the DOM

- updating - when a component is being re-rendered as a result of changes to either its props or state

- unmounting - when a component being removed from the DOM

- error handling - when there is an error during rendering, in a lifecyle method, or in the constructor of any child component

MOUNTING

  - constructor
  - static getDerivedStateFromProps
  - render()
  - componentDidMount()

UPDATING

  - static getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate

UNMOUNTING

  - componentWillUnmount

ERROR HANDLING

  - static getDerivedStateFromError
  - componentDidCatch

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 23 - Component Mounting Lifecycle Methods";{
/*---------------------------------------------------------------------------------

- constructor(props) - a special function that will get called whenever a new component is created
  - initializing state
  - binding the event handlers
  - can not cause side effects, such as making http-get/post/...
  - "super(props)" directly overwrite "this.state"

- static getDerivedStateFromProps
  - when the state of the component depends on changes in props over time
  - set the state
  - can't do http-request

- render() 
  - a required method in class component
  - read props & state and return JSX
  - cannot change state or interact with DOM or make ajax calls
  - children components lifecycle methods are also executed

- componentDidMount()
  - invoked immediately after a component and all its children components have been rendered to the DOM
  - ideal place to interact with DOM or perform http-request

#0 demonstrating the order of execution in mounting phase of a class comp.

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import LifecycleA from "./components/LifecycleA";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <LifecycleA />
      </div>
    );
  }
}
export default App;

--------------------------------
LifecycleA.js

import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: "Vishwas"
    }
    console.log("LifecycleA constructor");
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return(
      <div>
        <div>Lifecycle A</div>
        <LifecycleB></LifecycleB>
      </div>
    );
  }
}
export default LifecycleA

--------------------------------
LifecycleB.js

import React, { Component } from "react";

class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: "Vishwas"
    }
    console.log("LifecycleB constructor");
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB render");
    return(
      <div>
        Lifecycle A
      </div>
    );
  }
}
export default LifecycleB

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 24 - Component Updating Lifecycle Methods";{
/*---------------------------------------------------------------------------------
#1 defining updating phase, demonstrating MOUNTING and UPDATING phase

UPDATING

- static getDerivedStateFromProps(props, state) - rarely use
  - called every time a component is re-entered
  - set the state
  - should not do http-call

- shouldComponentUpdate(nextProps, nextState) - rarely use; expected bool return;
  - dictates if the component should re-render or not
  - performance optimization
  - do not do http-requests, and no setState method

- render() - commonly use
  - a required method
  - read props & state and return JSX
  - no state change and ajax calls

- getSnapshotBeforeUpdate(prevProps, prevState) - rarely use
  - called right before the changes from the virtual DOM are to be reflected in the DOM
  - capture some information from the DOM
  - method will either return null or return a value; returned value will be passed as the third parameter to the next method

- componentDidUpdate(prevProps, prevState, snapshot) - commonly use
  - called after the render is finished in the re-render cycles
  - cause side effects allow, meaning http calls allow

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import LifecycleA from "./components/LifecycleA";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <LifecycleA />
      </div>
    );
  }
}
export default App;

--------------------------------
App.js

import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: "Vishwas"
    }
    console.log("LifecycleA constructor");
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Codevolution"
    });
  }

  render() {
    console.log("LifecycleA render");
    return(
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB></LifecycleB>
      </div>
    );
  }
}
export default LifecycleA

--------------------------------
App.js

import React, { Component } from "react";

class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: "Vishwas"
    }
    console.log("LifecycleB constructor");
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");
    return(
      <div>
        Lifecycle B
      </div>
    );
  }
}
export default LifecycleB

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 defining UNMOUNTING phase and ERROR HANDLING phase 

UNMOUNTING

- componentWillUnmount()
    - method is invoked immediately before a component is unmounted and destroyed
    - canceling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
    - cannot do setState method

ERROR HANDLING

- static getDerivedStateFromError(error) and componentDidCatch(error, info)
  when there is an error during rendering, in a lifecycle method, or in the constructor of any child component

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 25 - Fragments";{
/*---------------------------------------------------------------------------------
#1 React.Fragment allow multiple children without the need for <div></div> wrapper

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}
export default App;

--------------------------------
Table.js

import React from "react";
import Column from "./Column"

function Table() {
  return(
<table>
  <tbody>
    <tr>
      <Column />
    </tr>
  </tbody>
</table>
  );
}
export default Table;

--------------------------------
Column.js

import React from "react";

function Column() {
  return(
    <React.Fragment key={item.id}>
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  );
}
export default Column;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 empty tags substitute for "React.Fragment"

--------------------------------
App.js

// same

--------------------------------
Table.js

// same

--------------------------------
Column.js

import React from "react";

function Column() {
  return(
    <>
      <td>Name</td>
      <td>Vishwas</td>
    </>
  );
}
export default Column;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 26 - Pure Components";{
/*---------------------------------------------------------------------------------
#1 demo of pure component

- regular component
  does not implement the "shouldComponentUpdate" method; it always returns true by default

----

- pure component
  implements "shouldComponentUpdate" with a shallow props and state comparison
  SC of prevState with currentState
                                      (Difference?)  => re-render comp.
  SC of prevProps with currentProps

----

* shallow comparison (SC)

  - primitive types
    a SC b returns true if a and b have the same value and are of the same type
    Ex: string "Vishwas" SC string "Vishwas" returns true

  - complex types
    a SC b returns true if a and b reference the exact same object
    Ex1:
        var a = [1,2,3];
        var b = [1,2,3];
        var a = a;
        var ab_eq = (a === b);  // false
        var ac_eq = (a === b);  // true

    Ex2:
        var a = {x: 1, y: 2};
        var b = {x: 1, y: 2};
        var c = a;
        var ab_eq = (a === b);  // false
        var ac_eq = (a === b);  // true

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ParentComp from "./components/ParentComp";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <ParentComp />
      </div>
    );
  }
}
export default App;

--------------------------------
ParentComp.js

import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: "Vishwas"
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vishwas"
      })
    }, 2000);
  }

  render() {
    console.log("********Parent Comp render********");
    return(
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
export default ParentComp;

--------------------------------
PureComp.js

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render(){
    console.log("Pure Comp render");
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    );
  }
}

export default PureComp;

--------------------------------
RegComp.js

import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg Comp render");
    return(
      <div>
        Regular Component {this.props.name}
      </div>
    );
  }
}
export default RegComp;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 summary

we can create a component by extending the PureComponent class; a PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component

if there is no difference, the component is not rerendered - performance boost

it is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour

never mutate the state; always returns a new object that reflect the new state

---------------------------------------------------------------------------------*/
}
  
//---------------------------------------------------------------------------------
"ReactJS Tutorial - 27 - memo";{
/*---------------------------------------------------------------------------------
#0 memo for function, as pure component to class

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ParentComp from "./components/ParentComp";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <ParentComp />
      </div>
    );
  }
}
export default App;

--------------------------------
ParentComp.js

import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: "Vishwas"
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vishwas"
      })
    }, 2000);
  }

  render() {
    console.log("********Parent Comp render********");
    return(
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}
export default ParentComp;

--------------------------------
MemoComp.js

import React from "react";

function MemoComp({name}) {
  return(
    <div>
      {name}
    </div>
  );
}
export default React.memo(MemoComp);

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 28 - Refs";{
/*---------------------------------------------------------------------------------
#1 current way to target inputs value

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import RefsDemo from "./components/RefsDemo";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <RefsDemo />
      </div>
    );
  }
}
export default App;

--------------------------------
RefsDemo.js

import React, { Component } from "react";
class RefsDemo extends Component {
  
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
  }
  
  componentDidMount() {
    this.inputRef.current.focus();  // put cursor @ input when page loaded 
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {

    return(
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default RefsDemo;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 legacy ways to target input (did not work, y????)

--------------------------------
App.js

// same

--------------------------------
RefsDemo.js

import React, { Component } from "react";
class RefsDemo extends Component {
  
  constructor(props) {
    super(props)
    // this.inputRef = React.createRef()
    this.cbRef = null
    this.setCbRef = element => {
      this.cbRef = element
    }
  }
  
  componentDidMount() {
    if(this.cbRef) {
      this.cbRef.focus()
    }
  }

  clickHandler = () => {
    alert(this.cbRef.current.value);
  }

  render() {

    return(
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default RefsDemo;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 29 - Refs with Class Components";{
/*---------------------------------------------------------------------------------
#0 accessing class child function using React.createRef()

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import FocusInput from "./components/FocusInput";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <FocusInput />
      </div>
    );
  }
}
export default App;

--------------------------------
FocusInput.js

import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {

  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }
  
  clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render() {
    return(
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}
export default FocusInput;

--------------------------------
Input.js

import React, { Component } from "react";
class Input extends Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  
  focusInput() {
    this.inputRef.current.focus()
  }

  render() {
    return(
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default Input;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:
when the button is click, the input box would be in focus
  focus - cursor appear inside input box

- in FocusInput.js
  with the following 3-codes:
      this.componentRef = React.createRef()
      ref={this.componentRef}
  they would open the link from FocusInput to Input; the
      clickHandler = () => {
        this.componentRef.current.focusInput()
      }
  is accessing function "focusInput" defined in child; this works because child
  (Input.js) open the linkage

- Input.js
  with the the following 2-codes:
      this.inputRef = React.createRef()
      ref={this.inputRef}
  the child is allowing linkage from its to the parent

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 30 - Forwarding Refs";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import FRParentInput from "./components/FRParentInput";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <FRParentInput />
      </div>
    );
  }
}
export default App;

--------------------------------
FRParentInput.js

import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  
  clickHandler = () => {
    this.inputRef.current.focus();
  }

  render() {
    return(
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}
export default FRParentInput;

--------------------------------
FRInput.js

import React from "react";

const FRInput = React.forwardRef((props, ref) => {
  return(
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:
when the button is click, the input box would be in focus
  focus - cursor appear inside input box

- in FRParentInput.js,
      ref={this.inputRef}
  created a link from FRParentInput to FRInput; req. that
      this.inputRef = React.createRef()
  in the constructor block

- in FRInput.js
  take note that, React.forwardRef() has its argument as an entire arrow function;
  with React.forwardRef arg as it is, stand as #1 requirement; the #2 req. is the
  attribute inside input
      ref={ref}
  with these two req., it open up the link from FRInput to FRParentInput
  
---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 31 - Portals";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
client/public/index.html

under
      <div id="root"></div>
add
      <div id="portal-root"></div>

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import PortalDemo from "./components/PortalDemo";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <PortalDemo />
      </div>
    );
  }
}
export default App;

--------------------------------
PortalDemo.js

import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals demo</h1>,
    document.getElementById("portal-root")
  );
}
export default PortalDemo;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:
when app is running, PortalDemo component will attach itself to element "portal-root"

- it is unclear what the use-case for this particular capability

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 32 - Error Boundary";{
/*---------------------------------------------------------------------------------
#1 applying "static getDerivedStateFromError"

- error boundary - a class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary

- static getDerivedStateFromError(error) - used to render a fallback UI after an error is thrown
- componentDidCatch(error, info) - used to log the error information

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;

--------------------------------
Hero.js

import React from "react";

function Hero({heroName}) {
  if(heroName === "Joker") {
    throw new Error("Not a hero!");
  }
  return(
    <div>
      {heroName}
    </div>
  );
}
export default Hero;

--------------------------------
ErrorBoundary.js

import React, { Component } from "react";
class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      hasError: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:
this feature of react allow for alternative fallback component in the case of
error; in this example, the error would be when heroName=Joker is pass onto
component Hero

- when app ran, the browser would display error; click 'x' on the top-right
  corner of error screen, the browser should display
      Batman
      Superman
      Something went wrong
  if component ErrorBoundary not there, the screen would have been blank

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 applying "static getDerivedStateFromError" AND componentDidCatch

--------------------------------
App.js

// same

--------------------------------
Hero.js

// same

--------------------------------
ErrorBoundary.js

import React, { Component } from "react";
class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      hasError: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:
the only difference in this iteration is the addition of "componentDidCatch" 
block, which is redundant; in "development" mode, React log all error to
the console

- when app ran, go to console of inspect; observe that the error
  information repeated

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 33 - Higher Order Components (Part 1)";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}
export default App;

--------------------------------
ClickCounter.js

import React, { Component } from "react";
class ClickCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  
  incrementCount = () => {
    this.setState( prevState => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    const { count } = this.state
    return(
      <button onClick={this.incrementCount}>Click {count} times</button>
    );
  }
}

export default ClickCounter;

--------------------------------
HoverCounter.js

import React, { Component } from "react";
class HoverCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  
  incrementCount = () => {
    this.setState( prevState => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    const { count } = this.state
    return(
      <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
    );
  }
}

export default HoverCounter;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- a button on browser, on that button it will log the number of times clicked

- under the button there is a caption "Hovered x times", where x is the number 
  of times the mouse hover over it, this is FREAKEN AWESOME!

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
  


