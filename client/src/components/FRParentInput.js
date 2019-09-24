import React, { Component } from "react";
inport FRInput from "./FRInput";

class FRParentInput extends Component {
  render() {
    return(
      <div>
        <FRInput />
        <button>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
