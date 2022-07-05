import compose from "./compose"

export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    // createStore: createStore()函数
    // reducer: countReducer() 函数
    const store = createStore(reducer)
    let dispatch = store.dispatch

    const midAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }

    const middlewareChain = middlewares.map(middleware => middleware(midAPI))

    // TODO: 加强 dispatch
    // 把所有的中间件函数都执行，同时还执行 store.dispatch
    dispatch = compose(...middlewareChain)(store.dispatch)

    return {
      ...store,
      // 加强版的 dispatch
      dispatch
    }
  }
};

