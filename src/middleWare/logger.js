export default function logger({ getState, dispatch }) {
  return next => action => {
    const prevState = getState();
    console.log(`${action.type}被执行了`);
    console.log('prevState:', prevState);

    const returnVal = next(action);
    console.log('--------------');
    const nextState = getState();
    console.log('nextState:', nextState);

    return returnVal;
  };
}

