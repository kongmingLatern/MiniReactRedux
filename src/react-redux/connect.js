import { useContext, useLayoutEffect, useSyncExternalStore } from "react"
import { Context } from "./Provider"
import useForceUpdate from "../shared/useForceUpdate"
import { bindActionCreators } from "../my-redux-nut"

const connect =
  (mapStateToProps, mapDispatchToProps) =>
    (WrappedComponent) => (props) => {
      const store = useContext(Context)
      const { getState, dispatch, subscribe } = store

      // const stateProps = mapStateToProps(getState())
      let dispatchProps = { dispatch }

      if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch)
      } else if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      }

      const forceUpdate = useForceUpdate()


      // useLayoutEffect(() => {
      //   const unsubscribe = subscribe(() => {
      //     forceUpdate()
      //   })

      //   return () => {
      //     unsubscribe()
      //   }
      // }, [forceUpdate, subscribe])
      const state = useSyncExternalStore(() => {
        subscribe(forceUpdate)
      }, getState)

      const stateProps = mapStateToProps(state)

      return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
    }

export default connect  