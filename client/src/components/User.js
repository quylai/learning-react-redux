import React, { Component } from "react";

export class User extends Component {
  render() {
    return(
      <div>
        {this.props.render(false)}
      </div>
    );
  }
}

export default User;
