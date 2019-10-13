
const redux = require("redux");
const createStore = redux.createStore;

//---------------------------------------------------------------------------------
// coding for actions

const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

//---------------------------------------------------------------------------------
// coding for reducer

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

//---------------------------------------------------------------------------------
// coding for redux-store
// also inclusion of:
//    const redux = require("redux");
//    const createStore = redux.createStore;

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();


