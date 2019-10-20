
//---------------------------------------------------------------------------------
"react-redux-scribes, info";{
/*---------------------------------------------------------------------------------
- Ctrl+k+0  folds all regions in the editor
- Ctrl+k+j  unfolds all regions in the editor

- tutorial at
  https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"";{
/*---------------------------------------------------------------------------------
#0 asdf

--------------------------------
App.js



---------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------
BEHAVIOR



---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 00";{
/*---------------------------------------------------------------------------------

* paste in here the codings of entire app at the conclusion of tutorial,
  in the mean time:
    - at 13: index.js demo vanila redux, 
             asyncActions.js demo async actions using redux-thunk
    - at 18 is the complete of app on concept of selling cake,
      due to the simplicity of app, some files only have a line of code
    - onward, app will,
      subscribe to store and dispatch actions without connect();
      (React Hooks available started from React Redux v7.1)
 

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 01 - Introduction";{
/*---------------------------------------------------------------------------------
#0 ...

- redux is a predictable state container for javascript apps;

- one of the problem that redux solved is making data accessing thru all 
  component, such as user/password; as of current, react solution are:
  with class comp, use react context
  with functional comp, apply hooks "useContext" and "useReducer"
  react does not have these capabilities at the creation (Aug '15) of redux

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 02 - Getting Started";{
/*---------------------------------------------------------------------------------

no codes, just setup

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 03 - Three Core Concepts";{
/*---------------------------------------------------------------------------------
#0 ...

core concepts of redux:
- store - holds the state of app
- action - describes the changes in the state of app
- reducer - carries out the state transition depending on the action

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 04 - Three Principles";{
/*---------------------------------------------------------------------------------
#0 ...

  #1
- single source of truth
  "the state of your whole application is stored in an object tree within 
  a single store"

  #2
- state is read-only
  "the only way to change the state is to emit an action, an object 
  describing what happened"

  #3
- changes are made with pure functions
  "to specify how the state tree is transformed by actions,
  you write pure reducers"
  reducer - (previousState, action) => newState  

- refer to images "three-principles-overview" to see the interaction between
  the three principles: action, reducer, redux-store 

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 05 - Actions";{
/*---------------------------------------------------------------------------------
#0 ...

- actions 
  are payloads of information that send data from your application to your store;
  they are the only source of information for the store; you send them to the
  store using store.dispatch()

- sample codes of an "actions"

      const BUY_CAKE = "BUY_CAKE";
      function buyCake() {
        return {
          type: BUY_CAKE,
          info: "First redux action"
        }
      }

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 06 - Reducers";{
/*---------------------------------------------------------------------------------
#0 ...

- reducers 
  specify how the application's state changes in response to actions sent to 
  the store; remember that actions only describe what happened, but don't 
  describe how the application's state changes.
  (previousState, action) => newState  

- sample codes of reducers
      const initialState = {
        numOfCakes: 10
      }

      const reducer = (state = initialState, action) => {
        switch(action.type) {
          case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
          }

          default: return state
        }
      }

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 07 - Store";{
/*---------------------------------------------------------------------------------
#0 ...

- store
  is the object that brings them together. The store has the following
  responsibilities:    
    - holds application state;
    - allows access to state via getState();
    - allows state to be updated via dispatch(action);
    - registers listeners via subscribe(listener);
    - handles unregistering of listeners via the function returned 
      by subscribe(listener);

- sample codes of redux-store:

      const redux = require("redux");            
      const createStore = redux.createStore; 

      const store = createStore(reducer);
      console.log("Initial state", store.getState());
      const unsubscribe = store.subscribe(() => 
        console.log("Updated state", store.getState()));
      
      store.dispatch(buyCake());
      store.dispatch(buyCake());
      store.dispatch(buyCake());
      unsubscribe();

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 08 - Cakes and Ice Creams";{
/*---------------------------------------------------------------------------------
#0 narration for the upcoming codes

- a shop selling two item, cakes and ice creams; there are two shopkeeper,
  each tasked with keep inventories of their respective item

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 09 - Multiple Reducers";{
/*---------------------------------------------------------------------------------
#0 ...

- cake shop
  cakes stored on the shelf
  shopkeeper-1 to handle BUY_CAKE from customer

- sell ice creams
  ice creams stored in the freezer
  shopkeeper-2 to handle BUY_ICECREAM from customer

--------------------------------
coded for "cake" and "ice cream" to have their own "actions" and "reducer"

const redux = require("redux");
const createStore = redux.createStore;

//--------
// coding for actions

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

//--------
// coding for reducer

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

//--------
// coding for redux-store

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 10 - Combine Reducers";{
/*---------------------------------------------------------------------------------

- coded to combine cakeReducer and iceCreamReducer,
      const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCreamReducer: iceCreamReducer
      });
  now parameter would be,
      const store = createStore(rootReducer);

--------------------------------
codes of index.js

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//--------
// coding for actions

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

//--------
// coding for reducer

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

//--------
// coding for redux-store

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreamReducer: iceCreamReducer
});
const store = createStore(rootReducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 11 - Middleware";{
/*---------------------------------------------------------------------------------
#0 about middleware

- is the suggested way to extend Redux with custom functionality
- provides a third-party point between dispatching an action, and the moment
  it reaches the reducer
- use middleware for logging, crash reporting, performing asynchronous tasks, etc

      createStore(reducer, applyMiddleware)
- redux.createStore take in two (could be more) args: reducer and applyMiddleware
  https://redux.js.org/api/createstore

--------------------------------
codes modded for middleware usage, in this case is "redux-logger"

const redux = require("redux");
const reduxLogger= require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//--------
// coding for actions

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

//--------
// coding for reducer

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

//---------------------------------------------------------------------------------
// coding for redux-store

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreamReducer: iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 12 - Async Actions";{
/*---------------------------------------------------------------------------------
#0 new app dealing with async actions

--------------------------------
whiteboard

----
state

    state = {
      loading: true,
      data: [],
      error: ""
    }

- loading - display a loading spinner in your component
- data - list of users
- error - display error to the user

----
actions

- FETCH_USERS_REQUEST - fetch list of users
- FETCH_USERS_SUCCESS - fetched successfully
- FETCH_USERS_FAILURE - error fetching the data

----
reducers

- case: FETCH_USERS_REQUEST
        loading: true

- case: FETCH_USERS_SUCCESS
        loading: false
        users: data ( from API )

- case: FETCH_USERS_FAILURE
        loading: false
        error: error ( from API )

--------------------------------
coding (asyncActions.js)

const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  loading: false,
  data: [],
  error: ""
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCES,
    payload: users
  }
}

const fetchUsersFailure = error  => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initial, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: true,
        users: action.payload,
        error: ""
      }

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    }
}

const store = createStore(reducer);

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 13 - Redux Thunk Middleware";{
/*---------------------------------------------------------------------------------

* note that asyncActions.js and index.js are standalone app, simply have
  include the package.json below with pertinent npm used by the respective app:
  asyncActions.js used npm: axios, redux, redux-thunk
  index.js used npm: redux, redux-logger
    - axios - requests to an API end point (http-calls)
    - redux - managing app state 
    - redux-logger - a middleware that transcribe onto terminal the 
      transition of app state 
    - redux-thunk - a middleware that lets you call action creators that return 
      a function instead of an action object


- app-behavior of asyncActions.js
  app is using "axios" to make http-GET to jsonplaceholder, then status
  (defined by us) of that http call, "loading", "users", "error" (if any), is
  output to VSC-console

- app-behavior of index.js
  in terminal, there will be output of app state changes; initial-state is, 
  numOfCakes: 10 and numOfIceCreams: 20; final-state is, numOfCakes: 7 and
  numOfIceCreams: 18

--------------------------------
package.json

{
  "name": "redux-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.0",
    "redux": "^4.0.4",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0"
  }
}

--------------------------------
asyncActions.js

const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: ""
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = error  => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: true,
        users: action.payload,
        error: ""
      }

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    }
}

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // response.data is the array of users
        const users = response.data.map(user => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        // error.message is the error description
        dispatch(fetchUsersFailure(error.message));
      });
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsers());

--------------------------------
index.js

const redux = require("redux");
const reduxLogger= require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//----
// coding for actions

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

//----
// coding for reducer

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

//----
// coding for redux-store

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreamReducer: iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 14 - React Redux Setup";{
/*---------------------------------------------------------------------------------

- to create react app, do command:
      npx create-react-app react-redux-demo

- installing necessary npm
      npm i redux react-redux
---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 15 - Actions";{
/*---------------------------------------------------------------------------------

- reference image
      react-redux-demo-folders-structure.png
  for the folder structure of this tutorial

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 16 - Reducers";{
/*---------------------------------------------------------------------------------

--------------------------------
- created cakeReducer.js

import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

export default cakeReducer;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 17 - Store";{
/*---------------------------------------------------------------------------------

- coded store.js and some modifications in app.js

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 18 - connect";{
/*---------------------------------------------------------------------------------

--------------------------------
- expected behavior:
  when running app, the browser would display caption
  "Number of cakes - 10" and below it has a button label "Buy Cake"
  on click of button, the numerical value will decrement by 1

- files structured is shown in image,
      react-redux-demo-folders-structure-18.png
  below is all files mod'd thus far:

--------------------------------1
package.json

{
  "name": "react-redux-demo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
    "react-redux": "^7.1.1",
    "react-scripts": "3.2.0",
    "redux": "^4.0.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

--------------------------------2
src\App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  return(
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;

--------------------------------3
src\components\CakeContainer.js

import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CakeContainer);

--------------------------------4
src\redux\cake\cakeActions.js

import { BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}

--------------------------------5
src\redux\cake\cakeReducer.js

import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

export default cakeReducer;

--------------------------------6
src\redux\cake\cakeTypes.js

export const BUY_CAKE = "BUY_CAKE";

--------------------------------7
src\redux\index.js

export { buyCake } from "./cake/cakeActions";

--------------------------------8
src\redux\store.js

import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 19 - React Redux with Hooks";{
/*---------------------------------------------------------------------------------
#0 

- subscribe to store and dispatch actions without connect();
  (React Hooks available started from React Redux v7.1)

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 20 - useSelector Hook";{
/*---------------------------------------------------------------------------------
#0 

- created HooksCakeContainer.js

---------------------------------------------------------------------------------*/
}
