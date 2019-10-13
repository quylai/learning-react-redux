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
    return(
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
export default Counter;
