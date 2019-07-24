function Foo() {
  var a = 1,
      b = '2',
      c = '';
  return React.createElement("div", null, React.createElement("button", {
    iview: 6
  }, "1"), React.createElement("button", {
    iview: 7
  }, "1"), React.createElement("button", {
    iview: {
      a: 1
    }
  }, "1"));
}

export default Foo;
window.__collectMap__ = {
  "iview": [6, 7, null, null]
};