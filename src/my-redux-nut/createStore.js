export default function createStore(reducer) {
  let currentState
  let currentListeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
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