function Foo() {
  var a = 1,
      b = '2',
      c = '';
  return React.createElement("div", null, React.createElement("button", {
    iview: 1
  }, "1"), React.createElement("button", {
    iview: 5
  }, "1"));
}

export default Foo;
window.__collectMap__ = {
  "iview": [99, 1, 5]
};