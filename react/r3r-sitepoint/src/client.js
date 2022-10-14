// var a = "1";
// {
//  a;
// }
// a;
import * as React from "react";
import * as ReactDOM from "react-dom";
import GameContainer from "./containers/GameContainer";

// ReactDOM.render(
//   <GameContainer 
//     width="100%"
//     height="100%"
//   />,
//   document.getElementById("game")
// );
ReactDOM.render(
  <GameContainer/>,
  document.getElementById("game")
);