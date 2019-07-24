import Bar from './foo';

function Foo() {
  var a = 1,
      b = '2',
      c = '';
  return React.createElement("div", null, React.createElement(Bar, null), React.createElement("button", {
    vant: "1"
  }, "1"), React.createElement("button", {
    vant: "2"
  }, "1"), React.createElement("button", {
    vant: "3"
  }, "1"), React.createElement("button", {
    iview: "4"
  }, "1"), React.createElement("button", {
    iview: 6
  }, "1"), React.createElement("button", {
    iview: 7
  }, "1"), React.createElement("button", {
    iview: {
      a: 1
    }
  }, "1"));
}

window.__collectMap__ = {
  "vant": ["1", "2", "3"],
  "iview": ["4", 6, 7, null, null]
};