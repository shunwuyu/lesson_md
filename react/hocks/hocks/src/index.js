import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, useAppState } from './state';

function reducer(state, action) {
  const { colors } = action;
  if (action.type == 'CHANGE_COLOR') {
    return {
      colors: colors
    }
  } else {
    throw new Error();
  }
}

function  App() {
  const initState = {
    colors: ["red", "blue"]
  };

  return (
    <AppProvider initValue={initState} reducer={reducer}>
      <div>
        <Child1 />
        <Child2 />
      </div>
    </AppProvider>
  )
}

function Child1(props) {
  const [state, dispatch] = useAppState();
  return (
    <div 
      style={{background:state.colors[0]}}
      onClick={() => dispatch({
        type: "CHANGE_COLOR",
        colors: ["yellow", "blue"]
      })}>
      I am {state.colors[0]}
    </div>
  )
}

function Child2(props) {
  const [state, dispatch] = useAppState();
  return (
    <div
      style={{ background: state.colors[1] }}
      onClick={() =>
        dispatch({
          type: "CHANGE_COLOR",
          colors: ["black", "red"]
        })
      }
    >
      I am {state.colors[1]}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);