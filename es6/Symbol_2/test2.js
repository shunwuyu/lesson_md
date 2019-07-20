var myObj = {};
var fooSym = Symbol('foo');
var otherSym = Symbol('bar');
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';
console.log(myObj.foo);
console.log(myObj[fooSym]);
console.log(myObj[otherSym]);