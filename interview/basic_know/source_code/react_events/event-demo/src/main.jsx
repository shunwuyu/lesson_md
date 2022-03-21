import ReactDOM from "react-dom";
import { addEvent } from "./eventSystem";

const jsx = (
  <section
    ONCLICK={(e) => {
      console.log("click section");
    }}
  >
    <h3>你好</h3>
    <button
      ONCLICK={(e) => {
        // e.stopPropagation();
        console.log("click button", e);
      }}
    >
      点击
    </button>
  </section>
);

const root = document.querySelector("#root");

addEvent(root, "click");

ReactDOM.render(jsx, root);