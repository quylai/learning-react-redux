import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props
    // const { state1, state2 } = this.state  // #notes1
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    )
  }
}

export default Welcome

/*
* notes1 - that is how destructuring for state look like; also, comment out these coding-statement when not in use, else will error
*/
