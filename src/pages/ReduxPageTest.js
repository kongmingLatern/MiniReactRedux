import React, { Component } from 'react'
import store from '../store'

export default class ReduxPageTest extends Component {
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    this.unSubscribe()
  }
  add = () => {
    store.dispatch({ type: "ADD" })
  }
  minus = () => {
    store.dispatch({ type: "MINUS" })
  }
  render() {
    return (
      <>
        <div>ReduxPageTest</div>
        <button>{store.getState().count}</button>
        <br />
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </>
    )
  }
}
