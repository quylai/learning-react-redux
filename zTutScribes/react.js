
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
"00-switch-statement";{
/*---------------------------------------------------------------------------------
#0 demo of switch-statement

--------------------------------
App.js

import React from "react";
import ContainerZ from "./components/ContainerZ";

const App = () => <ContainerZ />;

export default App;

--------------------------------
components/ContainerZ.js

import React, { Component } from "react";
import NavTabs from "./NavTabs";
import PageAcomp from "./pages/PageAcomp";
import PageBcomp from "./pages/PageBcomp";
import PageCcomp from "./pages/PageCcomp";

class ContainerZ extends Component {
  state = {
    currentPageZ: "PageAtag"
  };

  handlePageChange = page => {
    this.setState({ currentPageZ: page });
  };

  renderPageZ = (currentPageZ) => {
    switch(this.state.currentPageZ) {
      case "PageAtag":
        return <PageAcomp />;
      case "PageBtag":
        return <PageBcomp />;
      default:
        return <PageCcomp />;
    }
  }

  render() {
    return(
      <div>
        <NavTabs
          currentPage={this.state.currentPageZ}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPageZ()}
      </div>
    );
  }
}
export default ContainerZ;

--------------------------------
components/NavTabs.js

import React from "react";

function NavTabs(props) {
  return(
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#bottomTaggedPageA"
          onClick={() => props.handlePageChange("PageAtag")}
          className={props.currentPage === "PageAtag" ? "nav-link active" : "nav-link"}
        >
          PageA
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#bottomTaggedPageB"
          onClick={() => props.handlePageChange("PageBtag")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          PageB
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#bottomTaggedPageC"
          onClick={() => props.handlePageChange("PageCtag")}
          className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          PageC
        </a>
      </li>
    </ul>
  );
}
export default NavTabs;

--------------------------------
components/pages/PageAcomp

import React from "react";

const PageAcomp = () => (
  <div>
    <h1>PageAcomp header</h1>
    <p>
      AAAA...
    </p>
  </div>
);
export default PageAcomp;

--------------------------------
components/pages/PageBcomp

import React from "react";

const PageBcomp = () => (
  <div>
    <h1>PageBcomp header</h1>
    <p>
      BBBB...
    </p>
  </div>
);
export default PageBcomp;

--------------------------------
components/pages/PageCcomp

import React from "react";

const PageCcomp = () => (
  <div>
    <h1>PageCcomp header</h1>
    <p>
      CCCC...
    </p>
  </div>
);
export default PageCcomp;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

navigating pages uing switch-statement with Bootstrap NavTabs UI

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
#0 demonstrating the order of execution in MOUNTING phase of a class comp.

MOUNTING

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
"ReactJS Tutorial - 34 - Higher Order Components (Part 2)";{
/*---------------------------------------------------------------------------------
#0 ...

- higher order components (HOC)
  a pattern where a function takes a component as an argument and returns a new component

      const IronMan = withSuit( TonyStark )

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
withCounter.js

import React from "react";

const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {

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
      return( 
        <WrappedComponent 
          count={this.state.count}
          incrementCount={this.incrementCount} 
        />
      );
    }
  }
  return WithCounter;
}

export default withCounter;

--------------------------------
ClickCounter.js

import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {

  render() {
    const { count, incrementCount} = this.props;
    return(
      <button onClick={incrementCount}>
        Click {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter);

--------------------------------
HoverCounter.js

import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {

  render() {
    const { count, incrementCount} = this.props;
    return(
      <h2 onMouseOver={incrementCount}>
        Hovered {count} times
      </h2>
    );
  }
}

export default withCounter(HoverCounter);

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- withCounter.js
  playing the role of HOC; it will wraps ClickCounter and HoverCounter component
  to give them the incremental capability

- both component [ClickCounter and HoverCounter]:
  has their props destructured into [count and incrementCount]

- be mindful of naming convention...

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 35 - Higher Order Components (Part 3)";{
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
        <ClickCounter name="Vishwas" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;

--------------------------------
withCounter.js

import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    
    incrementCount = () => {
      this.setState( prevState => {
        return { count: prevState.count + incrementNumber }
      });
    }
      
    render() {
      return( 
        <WrappedComponent 
          count={this.state.count}
          incrementCount={this.incrementCount} 
          { ... this.props}
        />
      );
    }
  }
  return WithCounter;
}

export default withCounter;

--------------------------------
ClickCounter.js

import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {

  render() {
    const { count, incrementCount} = this.props;
    return(
      <button onClick={incrementCount}>
        {this.props.name} Click {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);

--------------------------------
HoverCounter.js

import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {

  render() {
    const { count, incrementCount} = this.props;
    return(
      <h2 onMouseOver={incrementCount}>
        Hovered {count} times
      </h2>
    );
  }
}

export default withCounter(HoverCounter, 7);

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- app behaves as follow:
  two entity will be on the browser, a button and a caption
  button's label will displays increment of 5 upon click
  the caption will increment displays increment of 7 when hover over

----

* a side from the observational behaviors, notes the following:
  
  - in withCounter.js, code:
        { ... this.props}
    is what allow the passing of "name" props thru ClickCounter component

  - in withCounter.js, the modification/insert of "incrementNumber" in codes:
        const withCounter = (WrappedComponent, incrementNumber) => {
        return { count: prevState.count + incrementNumber }
    is what allow incremental value to be pass in as parameter at 
    component level

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 36 - Render Props (Part 1)";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    );
  }
}

export default App;

--------------------------------
ClickCounterTwo.js

import React, { Component } from "react";
class ClickCounterTwo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  
  incrementCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const { count } = this.state
    return(
      <button onClick={this.incrementCount}>Clicked {count} times</button>
    );
  }
}

export default ClickCounterTwo;

--------------------------------
HoverCounterTwo.js

import React, { Component } from "react";
class HoverCounterTwo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  
  incrementCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    const { count } = this.state
    return(
      <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
    );
  }
}

export default HoverCounterTwo;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- app behaves as follow:
  two entity will be on the browser, a button and a caption
  button's label will displays increment of 1 upon click
  the caption will increment displays increment of 1 when hover over

- the codings in this activity is to setup for the demo on the next

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 37 - Render Props (Part 2)";{
/*---------------------------------------------------------------------------------
#1 ...

- render props
  refers to a technique for "sharing code" between React components using a 
  "prop whose value is a function"

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return(
      <div className="App">
        <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )} 
        />

        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )} 
        />
      </div>
    );
  }
}

export default App;

--------------------------------
Counter.js

import React, { Component } from "react";

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  
  incrementCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    return(
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

export default Counter;

--------------------------------
ClickCounterTwo.js

import React, { Component } from "react";
class ClickCounterTwo extends Component {

  render() {
    const { count, incrementCount } = this.props
    return(
      <button onClick={incrementCount}>Clicked {count} times</button>
    );
  }
}

export default ClickCounterTwo;

--------------------------------
HoverCounterTwo.js

import React, { Component } from "react";
class HoverCounterTwo extends Component {

  render() {
    const { count, incrementCount } = this.props
    return(
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    );
  }
}

export default HoverCounterTwo;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- behavior:
  two entity will be on the browser, a button and a caption
  button's label will displays increment of 1 upon click
  the caption will increment displays increment of 1 when hover over

- Counter.js has 2-linkage, a "state" named "count" and a "props"
  named "incrementCount";
  - state "count" is process as defined in function "incrementCount"
  - props "incrementCount" acts as a switch to invoke its defined function
    "incrementCount"; the switch is triggered by the action done unto the DOM
    element Counter is transforming

- [ClickCounterTwo and HoverCounterTwo] are both transformee because Counter is
  the transformer.... Opti... Pr...

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
# 2 transforming via as children

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return(
      <div className="App">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )} 
        </Counter>

        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )} 
        </Counter>
      </div>
    );
  }
}

export default App;

--------------------------------
Counter.js

import React, { Component } from "react";

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  
  incrementCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    return(
      <div>
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

export default Counter;

--------------------------------
ClickCounterTwo.js

// same

--------------------------------
HoverCounterTwo.js

// same


---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- behavior: same

- in Counter.js
  codes:
      {this.props.children(this.state.count, this.incrementCount)}
  "children" was "render"
  
- in App.js
  codes:
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} 
      </Counter>
  was
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} 
      />
  likewise for component HoverCounterTwo

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 38 - Context (Part 1)";{
/*---------------------------------------------------------------------------------
#0 ...

context - provides a way to pass data through the component tree without having
to pass props down manually at every level

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 39 - Context (Part 2)";{
/*---------------------------------------------------------------------------------
#0 ...

Context:
  - Create the context
  - Provide a context
  - Consume the context value

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

class App extends Component {
  render() {
    return(
      <div className="App">
        <UserProvider value="Vishwas">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;

--------------------------------
userContext.js

import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

--------------------------------
ComponentC.js

import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return <ComponentE />
  }
}

export default ComponentC;

--------------------------------
ComponentE.js

import React, { Component } from "react";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
  render() {
    return <ComponentF />
  }
}

export default ComponentE;

--------------------------------
ComponentF.js

import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return(
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- behavior
  pass data to the inner most component from the outter component; in this case,
  string "Vishwas" from App component into ComponentF
  
- create the context - userContext.js

- import UserProvider to the upmost component (App.js), in its "return", wrap 
  that next level component with <UserProvider></UserProvider>, supply 
  UserProvider with attribute "value" and equates it to the data in need to 
  be pass, in this case "Vishwas"

- import UserConsumer to the innermost component (ComponentF.js), in its "return",
  spawn a <UserConsumer></UserConsumer>, inserted a child, the child is an arrow
  function wrapped with {}, this function has an argument (hypothetically call
  it username), this function has a return of JSX, the content of this JSX is
  {username} wrapped with <div></div>, {username} is equated to attribute "value"
  in App.js

- thats all she wrote folks

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 40 - Context (Part 3)";{
/*---------------------------------------------------------------------------------
#1 default value of Context

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

class App extends Component {
  render() {
    return(
      <div className="App">
        <UserProvider value="Vishwas">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;

--------------------------------
userContext.js

import React from "react";

const UserContext = React.createContext("Codevolution");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

--------------------------------
ComponentC.js

import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return <ComponentE />
  }
}

export default ComponentC;

--------------------------------
ComponentE.js

import React, { Component } from "react";
import ComponentF from "./ComponentF";

class ComponentE extends Component {
  render() {
    return <ComponentF />
  }
}

export default ComponentE;

--------------------------------
ComponentF.js

import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return(
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:
demonstrating the defaut value of "context"

- in userContext.js, where string "Codevolution" resided is the place of
  context default value

- note that because it's "default", it only active if the value of context 
  were not apply; observe that if in App.js, codes:
        <UserProvider value="Vishwas">
  and
        </UserProvider>
  where to be commented out, "Codevolution" would be seen output onto browser

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 context value supplied to intermediary component

--------------------------------
App.js

// same

--------------------------------
userContext.js

import React from "react";

const UserContext = React.createContext("Codevolution");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;

--------------------------------
ComponentC.js

// same

--------------------------------
ComponentE.js

import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";


class ComponentE extends Component {
  render() {
    return(
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;
export default ComponentE;

--------------------------------
ComponentF.js

// same

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- behavior:
  output on the browser are:
      Component E context Vishwas
      Hello Vishwas
  this concluded that component ComponentE accessed context value

* this approach is simpler than the provider/consumer approach, but the limitation are:
    - only intermediary "class" component could access it
    - provider/consumer approach MUST occured at the end-point component

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 41 - HTTP and React";{
/*---------------------------------------------------------------------------------
#0 ...

React deals more with UI front-end rather than http-request to server back-end

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 42 - HTTP GET Request";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return(
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;

--------------------------------
PostList.js

import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      errorMsg: ""
    }
  }
  
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts8")
    .then(response => {
      console.log(response);
      this.setState({posts: response.data});
    })
    .catch(error => {
      console.log(error);
      this.setState({errorMsg: "Error retreiving data"});
    });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return(
      <div>
        List of posts
        {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.title}</div>) :
          null
        }
        { errorMsg ? <div>{errorMsg}</div> : null }
      </div>
    );
  }
}

export default PostList;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:

- behavior
  app will make a http-GET at:
      https://jsonplaceholder.typicode.com/posts
  it then displays those posts onto the browser
  
---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"ReactJS Tutorial - 43 - HTTP Post Request";{
/*---------------------------------------------------------------------------------
#0 demonstrate http-POST request

--------------------------------
App.js

import React, { Component } from "react";
import "./App.css";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return(
      <div className="App">
        <PostForm />
      </div>
    );
  }
}

export default App;

--------------------------------
PostForm.js

import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      userId: "",
      title: "",
      body: ""
    }
  }
  
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {userId, title, body} = this.state
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text" 
              name="userId" 
              value={userId} 
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input 
              type="text" 
              name="body" 
              value={body} 
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:


---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 1 - Introduction";{
/*---------------------------------------------------------------------------------
#0 ...

- hooks - capability added in React 16.8 which allow you to use React features
  without having to write class; i.e. hook is to function as state is to class

* necessities that brought forth hooks, Classes:
  - required syntax "this" keyword when used context of event handlers
  - does not minify very well and hot reloading are unreliable
  - reuseable stateful component logic are not intuitive in term of codings; HOC and render props were not enough
  - components for complex scenarios can not be consolidated together
    e.g. data fetching
    data fetching codes in componentDidMount and componentDidUpdate
    event listeners codes in componentDidMount and componentWillUnmount

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 2 - useState Hook";{
/*---------------------------------------------------------------------------------
#1 counter using class

--------------------------------
App.js

import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter"

function App() {

  return(
    <div className="App">
      <ClassCounter />
    </div>
  );
}
export default App;

--------------------------------
ClassCounter.js

import React, { Component } from "react";
class ClassCounter extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      count: 0
    }
  }
  
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return(
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}
export default ClassCounter;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 counter using useState

--------------------------------
App.js

import React from "react";
import "./App.css";
import HookCounter from "./components/HookCounter";

function App() {

  return(
    <div className="App">
      <HookCounter />
    </div>
  );
}
export default App;

--------------------------------
HookCounter.js

import React, {useState} from "react";

function HookCounter() {

  const [count, setCount] = useState(0);
  
  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
export default HookCounter;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
Rules of hooks:

- "only call hooks at the top level"
  : don't call hooks inside loops, condtions, or nested functions

- "only call hooks from react functions"
  : call them from within React functional components and not just any regular
  Javascript function

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 3 - useState with previous state";{
/*---------------------------------------------------------------------------------
#0 counter with reset/increment/decrement

--------------------------------
App.js

import React from "react";
import "./App.css";
import HookCounterTwo from "./components/HookCounterTwo";

function App() {

  return(
    <div className="App">
      <HookCounterTwo />
    </div>
  );
}
export default App;

--------------------------------
HookCounterTwo.js

import React, { useState } from "react";

function HookCounterTwo() {

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for(let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }

  return(
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}
export default HookCounterTwo;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 4 - useState with object";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React from "react";
import "./App.css";
import HookCounterThree from "./components/HookCounterThree";

function App() {

  return(
    <div className="App">
      <HookCounterThree />
    </div>
  );
}
export default App;

--------------------------------
HookCounterThree.js

import React, { useState } from "react";

function HookCounterThree() {

  const [name, setName] = useState({firstName: "", lastName: ""});

  return(
    <div>
      <input 
        type="text" 
        value={name.firstName} 
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input 
        type="text" 
        value={name.lastName} 
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
      <h2>{JSON.stringify(name)}</h2>

      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
    </div>
  );
}
export default HookCounterThree;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

app objective:
display two inputs field as it's typed

about HookCounterThree.js

- useState does not merge like "state" in class
- "..." is called "spread" operator, part of Javascript syntax

- for codes:
      onChange={e => setName({ ...name, firstName: e.target.value })}
  : upon changes in this field, copy everything in "name" object and also update
  key "firstName"; this narration is apply as such in lastName field

- disregard codes:
      <h2>{JSON.stringify(name)}</h2>
  it was there for the purpose of debugging; if bug were to be observe, 
  modify "onChange" of field firstName as such,
      onChange={e => setName({ firstName: e.target.value })}
  similarly mod'd to lastName field

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 5 - useState with array";{
/*---------------------------------------------------------------------------------
#0 ...

--------------------------------
App.js

import React from "react";
import "./App.css";
import HookCounterFour from "./components/HookCounterFour";

function App() {

  return(
    <div className="App">
      <HookCounterFour />
    </div>
  );
}

export default App;

--------------------------------
HookCounterFour.js

import React, { useState } from "react";

function HookCounterFour() {

  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return(
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

summary of useState

- useState hook is part of functional components
- in classes, "state" is an object; with useState hook, "state" can be:
  numbers, strings, booleans...

- when destructuring useState: first element is the current value of the state,
  second element is a state setter function

- when dealing with objects or arrays, always make sure to spread state variable
  and then call the setter function

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 6 - useEffect Hook";{
/*---------------------------------------------------------------------------------
#0 ...

for a timer in class component, it would have the following codes:

componentDidMount() {
  document.title = `You click ${this.state.count} times`;
  this.interval = setInterval(this.tick, 1000);
}
componentDidUpdate() {
  document.title = `You clicked ${this.state.count}` times;
}
componentWillUnmount() {
  clearInterval(this.interval);
}

- useEffect of functional component would account for these three lifecycle
  entities: componentDidMount, componentDidUpdate, and componentWillUnmount

- purpose of useEffect is for side effects e.g. http-calls

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 7 - useEffect after render";{
/*---------------------------------------------------------------------------------
#1 counter with class

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

import React, { Component } from "react";

class ClassCounterOne extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, preState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return(
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}
export default ClassCounterOne;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 implementing useEffect

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

import React, { useState, useEffect } from "react";

function HookCounterOne() {

  const[count, setCount] = useState(0);

  useEffect(() => {
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
/*---------------------------------------------------------------------------------
STORY

app objective:
counter display on the tab of app browser

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 8 - Conditionally run effects";{
/*---------------------------------------------------------------------------------
#1 conditional update with class

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

import React, { Component } from "react";

class ClassCounterOne extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: ""
    }
  }
  
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return(
      <div>
        <input 
          type="text" 
          value={this.state.name}
          onChange={e => {this.setState({ name: e.target.value })
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}
export default ClassCounterOne;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

run app and observe in browser inspect; notice that the componentDidUpdate
lifecyle only triggered when button is click, which is expected because that 
is what defined in the if-statement in componentDidUpdate-block

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 demo on how to update state of interested value changed

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

import React, { useState, useEffect } from "react";

function HookCounterOne() {

  const[count, setCount] = useState(0);
  const[name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return(
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

the object here is to only up state changes of button, not letter type in inputs;
to acheive this, it is specified in second argument array of useEffect
      useEffect(() => {
        blah...asdf
      }, [count]);

take note alias "count" above and correlated with declaration in:
      const[count, setCount] = useState(0);

---------------------------------------------------------------------------------*/
}
  
//---------------------------------------------------------------------------------
"React Hooks Tutorial - 9 - Run effects only once";{
/*---------------------------------------------------------------------------------
#0 using componentDidMount in class

--------------------------------
App.js

import React from "react";
import "./App.css";
import ClassMouse from "./components/ClassMouse";

function App() {

  return(
    <div className="App">
      <ClassMouse />
    </div>
  );
}

export default App;

--------------------------------
ClassMouse.js

import React, { Component } from "react";
class ClassMouse extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      x: 0,
      y: 0
    }
  }
  
  logMousePosition = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return(
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}
export default ClassMouse;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

behavior:
once the app ran, the browser is displaying coordinate of the mouse cursor;
top-left is referenc as origin

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
#2 class componentDidMount equivalent in functional comp. hook

--------------------------------
App.js

import React from "react";
import "./App.css";
import HookMouse from "./components/HookMouse";

function App() {

  return(
    <div className="App">
      <HookMouse />
    </div>
  );
}

export default App;

--------------------------------
HookMouse.js

import React, { useState, useEffect } from "react";
function HookMouse() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  } 

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition)
  }, []);

  return(
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
export default HookMouse;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

- behavior:
  once the app ran, the browser is displaying coordinate of the mouse cursor;
  top-left is referenc as origin

- then empty array in second argument of useEffect:
      useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition)
      }, []);

  that empty array is equivalent to componentDidMount in class component

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Hooks Tutorial - 10 - useEffect with cleanup";{
/*---------------------------------------------------------------------------------
#0 removal of event listener

--------------------------------
App.js

import React from "react";
import "./App.css";
import MouseContainer from "./components/MouseContainer";

function App() {

  return(
    <div className="App">
      <MouseContainer />
    </div>
  );
}
export default App;

--------------------------------
MouseContainer.js

import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {

  const [display, setDisplay] = useState(true);
  return(
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
}
export default MouseContainer;

--------------------------------
HookMouse.js

import React, { useState, useEffect } from "react";
function HookMouse() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  } 

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition)

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    }
  }, []);

  return(
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
export default HookMouse;

---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
STORY

- behavior:
  on the browser there is a button, this button toggle the display of
  mouse-pointer coordinates

- MouseContainer.js is the button, HookMouse.js is component that tracks the
  position;
  the focus of this activity is to remove the event listener after the component
  done (in this case, toggle display off);
  observe codes below (in HookMouse.js):
      useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition)

        return () => {
          console.log("Component unmounting code");
          window.removeEventListener("mousemove", logMousePosition);
        }
      }, []);

  the "return" of useEffect is designed to handle removal of event listener;
  in class component, it is done in "componentWillUnmount" lifecycle

---------------------------------------------------------------------------------*/
}








