Object.mycreate = function(proto, properties) {
  function F() {};
  F.prototype = proto;
  // console.log(Object.defineProperties, '-----------');
  let o = new F();
  if(properties) {
      Object.defineProperties(o, properties);
  }
  return o
}
var hh = Object.mycreate({a: 11}, {mm: {value: 10}, xx: {value: 9}});
console.dir(hh.xx);