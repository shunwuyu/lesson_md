var snabbdom = require('snabbdom');
const h = snabbdom.h;
const vnode = h("div#container.two.classes", { on: { click: ()=>{console.log('clicked')} } }, [
  h("span", { style: { fontWeight: "bold" } }, "This is bold"),
  " and this is just normal text",
  h("a", { props: { href: "/foo" } }, "I'll take you places!"),
]);
console.log(vnode);