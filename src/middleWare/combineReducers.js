export default function combineReducers(reducers) {
  // reducers
  /*
  {
    count: countReducer
  } 
    */
  return function combine(state = {}, action) {
    const nextState = {}

    for (const key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action)
    }

    return nextState
  }
}
