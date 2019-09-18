import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      parentName: "Parent"
    }
    // bind syntax "this" to function greetParent
    this.greetParent = this.greetParent.bind(this);
  }
  
  // child calling this function, and passing data thru parameter
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
