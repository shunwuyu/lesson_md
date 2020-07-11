var test1= new Boolean(true);
var test2= new Boolean(false);
var test3= new Date();
var test4= new String("999");
var test5= new String("999 888");

console.log(Number(test1)+ "<br />");
console.log(Number(test2)+ "<br />");
console.log(Number(test3)+ "<br />");
console.log(Number(test4)+ "<br />");
console.log(Number(test5)+ "<br />");


let s1 = Symbol()
let s2 = Symbol('another symbol')
let s3 = Symbol('another symbol')

console.log(s1 === s2) // false
console.log(s2 === s3);
