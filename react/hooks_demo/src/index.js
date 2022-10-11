import React from "react";
import ReactDOM from "react-dom";

let value;
function useState(initValue) {
  value = value === undefined ? initValue : value;
  function dispatch(newValue) {
    value = newValue;
    scheduleWork();
  }
  return [value, dispatch];
}

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Add count</button>
    </>
  );
}

function scheduleWork() {
  ReactDOM.render(<Counter />, document.querySelector("#root"));
}

scheduleWork(); 
