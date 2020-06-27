import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({});
export const UPDATE_COLOR = 'UPDATE_COLOR';

const colorReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

export const Color = props => {
  const { Provider } = ColorContext;
  const [color, dispatch] = useReducer(colorReducer, 'blue');
  return (
    <Provider value={{color, dispatch}}>
      {props.children}
    </Provider>
  )
}