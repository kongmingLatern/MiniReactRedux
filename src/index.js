import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("#root")
// )

// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return arg => arg
//   }
//   if (funcs.length === 1) {
//     return funcs[0]
//   }
//   return funcs.reduce((a, b) => (...args) => a(b(...args)))
// }

// const arr = []

// const b = arr.reduce((a, c) => {
//   return a + c
// })

// function f1() {
//   return 1
// }

// function f2() {
//   return 2
// }
// function f3() {
//   return 3
// }

// const a = compose(f1, f2, f3)('111')
