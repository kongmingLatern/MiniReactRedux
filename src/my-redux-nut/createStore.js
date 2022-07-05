export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState // 当前的值
  let currentListeners = []

  function getState() {
    // 返回当前值
    return currentState
  }

  function dispatch(action) {
    // 累加状态, 参考 reduce(acc, curVal) => {} 函数
    // action: { type: "ADD" }: 指令
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => {
      listener()
    })
  }

  function subscribe(listener) {
    currentListeners.push(listener)

    return () => {
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }

  dispatch({ type: 'absdjaosidjoiasdnoiasd' })

  return {
    getState,
    dispatch,
    subscribe
  }
};