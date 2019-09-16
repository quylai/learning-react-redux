import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();


/*

----
11 - setState
----

- don't (#1) assign to value to "this.state" directly outside of "constructor" block, use "this.setState"

- React.js environment is ran asyncronously, to ensure syncronous run use callback function, like so:
        this.setState.blahZ({
          blahZ: this.state.blahZ + 1
        }, () => {
          console.log('blah-zinga');  // callback block
        })

- don't (#2) rely on React.js to update "this.setState" immediately when using "this.setState" block enclosure as an updater, rather its argument enclosure; observe:
        this.setState((prevState, props) => ({
          count: prevState.count + 1
        }));
"prevState" likely syntax????  also ignore "props" argument for now
the terminology of the methodology that just occur here is stated as:
"the argument is passed in as a function, instead of the normal, passing in an object"

- summary:
    Always make use of setState and never modify the state directly
    Code has to be executed after the state has been updated?  Place that code in the callback function which is the second argument to the setState methodology.
    When you have to update state based on the previous state value, pass in a functions as an argument instead of the regular object 

*/
