import Foo from './foo';
import Bar from './bar';

function App() {
  return React.createElement("div", null, React.createElement(Foo, {
    iview: 4
  }), React.createElement(Bar, {
    iview: 100
  }), React.createElement("button", {
    iview: "2"
  }, "1"), React.createElement("button", {
    iview: 3
  }, "1"));
}

window.__collectMap__ = {
  "iview": [99, 1, 5, 4, 100, "2", 3]
};