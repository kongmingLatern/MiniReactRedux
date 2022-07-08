import { useContext } from "react";
import { Context } from "./Provider";

export default function useDispatch() {
  const store = useContext(Context)

  const { dispatch } = store

  return dispatch
};
