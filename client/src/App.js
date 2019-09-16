import React from "react";
// import Counter from "./components/Counter.js";
// import Greet from "./components/Greet.js";
// import Welcome from "./components/Welcome.js";
import FunctionClick from "./components/FunctionClick.js";
import ClassClick from "./components/ClassClick.js";



function App() {
  return( 
    <>
    <div className="App">
      {/* <Greet name="Diana" heroName="Wonder Woman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      <FunctionClick />
      <ClassClick />

    </div>
    </>
  );
}

export default App;
