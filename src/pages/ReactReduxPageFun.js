import { useCallback } from "react"
import { useDispatch, useSelector } from "../react-redux"

export default function ReactReduxPageFun() {
  const count = useSelector(({ count }) => count)

  const dispatch = useDispatch()

  const add = useCallback(() => {
    dispatch({ type: "ADD" })
  }, [])

  return (
    <>
      <div>ReactReduxPageFun</div>
      <button onClick={add}>{count}</button>
    </>
  )
}
