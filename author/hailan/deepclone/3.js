var obj = { a: {a: "hello", b: 21} };

var initalObj = Object.assign({}, obj);
initalObj.a.a = "changed";
console.log(obj.a.a);