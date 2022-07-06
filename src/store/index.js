import { createStore, applyMiddleware } from "../my-redux-nut";
import { logger, thunk, promise } from "../middleWare";
import combineReducers from "../middleWare/combineReducers";
// import { combineReducers } from "redux";
// import { createStore } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from 'redux-promise'
// import { applyMiddleware } from "redux";

export function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1
    case "MINUS":
      return state - 1
    default:
      return state
  }
}
const store = createStore(combineReducers({
  count: countReducer,
  // user: userReducer,
}), applyMiddleware(thunk, promise, logger))

export default store