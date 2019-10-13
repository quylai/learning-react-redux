
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
"React Redux Tutorials - 1 - Introduction";{
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
"React Redux Tutorials - 2 - Getting Started";{
/*---------------------------------------------------------------------------------

no codes, just setup

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 3 - Three Core Concepts";{
/*---------------------------------------------------------------------------------
#0 ...

core concepts of redux:
- store - holds the state of app
- action - describes the changes in the state of app
- reducer - carries out the state transition depending on the action

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 4 - Three Principles";{
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
"React Redux Tutorials - 5 - Actions";{
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
"React Redux Tutorials - 6 - Reducers";{
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
"React Redux Tutorials - 7 - Store";{
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
"React Redux Tutorials - 8 - Cakes and Ice Creams";{
/*---------------------------------------------------------------------------------
#0 narration for the upcoming codes

- a shop selling two item, cakes and ice creams; there are two shopkeeper,
  each tasked with keep inventories of their respective item

---------------------------------------------------------------------------------*/
}

//---------------------------------------------------------------------------------
"React Redux Tutorials - 9 - Multiple Reducers";{
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

--------------------------------
modded for middleware usage, in this case is "redux-logger"

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
