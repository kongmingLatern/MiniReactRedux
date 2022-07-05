export default function appleyMiddleware(...middles) {
  return createStore => reducer => {
    const store = createStore(reducer)
    const dispatch = store.dispatch


    return {
      ...store,
      // 加强版的 dispatch
      dispatch
    }
  }
};
