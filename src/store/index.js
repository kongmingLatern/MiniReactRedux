import { createStore, applyMiddleware } from "../my-redux-nut";
// import { createStore } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { applyMiddleware } from "redux";

function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1
    case "MINUS":
      return state - 1
    default:
      return state
  }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger))


function logger({ getState, dispatch }) {
  return next => action => {
    const prevState = getState()
    console.log('--------------');
    console.log(`${action.type}被执行了`);
    console.log('prevState:', prevState)

    const returnVal = next(action)

    console.log('--------------')
    const nextState = getState()
    console.log('nextState:', nextState)

    return returnVal
  }
}


function thunk({ getState, dispatch }) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
}


export default store