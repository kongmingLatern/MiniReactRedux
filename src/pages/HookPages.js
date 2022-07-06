import React, { useReducer } from 'react'
import { countReducer } from '../store'

const init = (initArg) => initArg - 0

export default function HookPage(props) {
  const [state, dispatch] = useReducer(countReducer, "0", init)
  return (
    <>
      <div>HookPage</div>
      <button onClick={() => dispatch({ type: "ADD" })}>
        {state}
      </button>
    </>
  )
}