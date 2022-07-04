import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component {
  componentDidMount() {
    // 订阅
    this.unSubcribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    // 取消订阅
    this.unSubcribe()
  }

  add = () => {
    store.dispatch({ type: "ADD" })
  }

  minus = () => {
    store.dispatch({ type: "MINUS" })
  }

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}