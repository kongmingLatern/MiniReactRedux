export default function combineReducers(reducers) {
  // reducers
  /*
  {
    count: countReducer
  } 
    */
  return function combine(state = {}, action) {
    // console.log(state, reducers, action);
    const nextState = {}
    // 状态值是否发生改变
    let hasChanged = false

    for (const key in reducers) {
      const reducer = reducers[key];
      // reducer(state[key], action) 相当于 reducer({}, action)
      // 进入 reducer 函数后会返回 state 的值
      nextState[key] = reducer(state[key], action)
      hasChanged = hasChanged || nextState[key] !== state[key]
      // console.log(nextState[key]);
    }

    // { a: 1, b: 1} {a: 1}
    hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length

    return hasChanged ? nextState : state
  }
}
