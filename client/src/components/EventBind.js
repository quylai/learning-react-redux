import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {  // for resolution# 1,2,3
    super(props)
  
    this.state = {
      message: "Hello"
    }
    this.clickHandler = this.clickHandler.bind(this)  // in for resolution#3, out for #4
  }

  // clickHandler() {  // omit for resolution#4
  //   this.setState({
  //     message: "Goodbye!"
  //   })
  //   console.log(this);
  // }

  clickHandler = () => {  // redefine for #4
    this.setState({
      message: "Goodbye!"
    })
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        {/* "this" syntax is not defined here, there are 3-resolution: */}

        {/* resolution#1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* resolution#2 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* resolution#3 */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* resolution#4, also neeed modding "clickHandler" */}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}
export default EventBind
