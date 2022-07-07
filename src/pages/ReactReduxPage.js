import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../react-redux'
import { bindActionCreators } from '../my-redux-nut'
// import { bindActionCreators } from 'redux'

// HOC higher order Component, 高阶组件：是个函数，接收组件作为参数，返回新的组件
export default connect(
  // mapStateToProps
  // mapDispatchToProps
  // state => {
  //   return state
  // }
  ({ count }) => ({ count }),
  (dispatch) => {
    let createors = {
      add: () => ({ type: "ADD" }),
      // minus: () => ({ type: "MINUS" }),
    }


    createors = bindActionCreators(createors, dispatch)


    return {
      dispatch,
      ...createors
    }
  }

  // {
  //   add: () => ({ type: "ADD" }),
  //   minus: () => ({ type: "MINUS" }),
  // }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log(this.props);
      const { count, dispatch, add } = this.props
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <button onClick={() => dispatch({ type: "ADD" })}>dispatch: {count}</button>
          <button onClick={add}>add:{count}</button>
        </div>
      )
    }
  }
)