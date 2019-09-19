
//---------------------------------------------------------------------------------
// ReactJS Tutorial - 18 - Lists and Keys
/*---------------------------------------------------------------------------------
#0  demonstrating "key" attribute is needed for list items

----------------
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

----------------
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

----------------
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
