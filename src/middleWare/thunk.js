export default function thunk({ getState, dispatch }) {
  return next => action => {
    // console.log('thunk next', next);
    // console.log('thunk action', action);
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
}
