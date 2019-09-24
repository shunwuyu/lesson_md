var a = 25;
var b = a;
b = 18;
console.log(a);
console.log(b);

var test = {
  a: 'a',
  b: 'b'
}

var test2 = test;
test2.a = 'a2';
console.log(test.a);