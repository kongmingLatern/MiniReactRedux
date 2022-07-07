import React from "react"

export const Context = React.createContext()
export default function Provider({ store, children }) {
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
};
