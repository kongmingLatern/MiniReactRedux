import { isPromise } from "../shared";

export default function promise({ dispatch }) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}
