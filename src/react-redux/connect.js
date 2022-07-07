import { useContext, useLayoutEffect, useReducer } from "react"
import { Context } from "./Provider"

const connect =
  (mapStateToProps, mapDispatchToProps) =>
    (WrappedComponent) => (props) => {
      const store = useContext(Context)
      const { getState, dispatch, subscribe } = store

      const stateProps = mapStateToProps(getState())
      const dispatchProps = { dispatch }

      const [_, forceUpdate] = useReducer(x => x + 1, 0)


      useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
          forceUpdate()
        })

        return () => {
          unsubscribe()
        }
      }, [])

      return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
    }
export default connect  