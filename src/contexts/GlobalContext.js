import React from "react";

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(false)

  function handleClick() {
    setAuthenticated(!authenticated)
  }

  return (
    <GlobalContext.Provider value={{ authenticated, handleClick }}>
      {children}
    </GlobalContext.Provider>
  )
}