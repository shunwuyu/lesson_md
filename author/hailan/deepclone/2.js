function simpleClone(initalObj) {    
  var obj = {};    
  for ( var i in initalObj) {
    obj[i] = initalObj[i];
  }    
  return obj;
}

var obj = {
  a: "hello",
  b:{
      a: "world",
      b: 21
    },
  c:["Bob", "Tom", "Jenny"],
  d:function() {
      alert("hello world");
    }
}
var cloneObj = simpleClone(obj); 
console.log(cloneObj.b); 
console.log(cloneObj.c);
console.log(cloneObj.d);

cloneObj.b.a = "changed";
cloneObj.c = [1, 2, 3];
cloneObj.d = function() { alert("changed"); };
console.log(obj.b);
console.log(obj.c);
console.log(obj.d);