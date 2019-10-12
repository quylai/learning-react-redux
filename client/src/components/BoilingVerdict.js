import React from "react";
import { prependOnceListener } from "cluster";

function BoilingVerdict() {
  
  if(prependOnceListener.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boild.</p>
}
export default BoilingVerdict;
