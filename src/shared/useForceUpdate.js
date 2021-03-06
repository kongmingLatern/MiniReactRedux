import { useCallback, useState } from "react";

export default function useForceUpdate() {
  const [, setState] = useState(0)

  const update = useCallback(() => {
    setState(prev => prev + 1)
  }, [])

  return update

}
