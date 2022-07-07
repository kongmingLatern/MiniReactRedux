import { useContext, useLayoutEffect } from "react"
import { Context } from "./Provider"
import useForceUpdate from "../shared/useForceUpdate"

const connect =
  (mapStateToProps, mapDispatchToProps) =>
    (WrappedComponent) => (props) => {
      const store = useContext(Context)
      const { getState, dispatch, subscribe } = store

      const stateProps = mapStateToProps(getState())
      const dispatchProps = { dispatch }


      const forceUpdate = useForceUpdate()


      useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
          forceUpdate()
        })

        return () => {
          unsubscribe()
        }
      }, [subscribe])

      return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
    }

export default connect  