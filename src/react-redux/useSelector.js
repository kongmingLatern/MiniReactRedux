import { useContext, useLayoutEffect, } from "react";
import useForceUpdate from "../shared/useForceUpdate";
import { Context } from "./Provider";

export default function useSelector(seletor) {
  const store = useContext(Context)

  const { getState, subscribe } = store

  const selectedState = seletor(getState())

  const forceUpdate = useForceUpdate()

  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })
    return () => {
      unsubscribe()
    }
  }, [subscribe, forceUpdate])

  return selectedState
};
