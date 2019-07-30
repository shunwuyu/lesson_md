import Bar from './foo';

function Foo() {
  var a = 1,
      b = '2',
      c = '';
  return React.createElement("div", null, React.createElement(Bar, {
    iview: 4
  }), React.createElement("button", {
    iview: "2"
  }, "1"), React.createElement("button", {
    iview: 3
  }, "1"));
}

window.__collectMap__ = {
  "iview": [1, 5, 4, "2", 3]
};