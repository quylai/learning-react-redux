import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      parentName: "Parent"
    }

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(argZ) {
    alert(`Hello ${this.state.parentName} from ${argZ}`)
  }
  
  render() {
    return(
    <div>
      <ChildComponent greetHandler={this.greetParent}/>
    </div>
    )
  }
}
export default ParentComponent
