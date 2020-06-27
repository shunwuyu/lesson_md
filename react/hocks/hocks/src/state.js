import React, { useContext, useReducer } from 'react'

export const AppContext = React.createContext(null)

export function AppProvider({ reducer, initValue, children}) {
  return (
    <AppContext.Provider value={useReducer(reducer, initValue)}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppState = () => useContext(AppContext)