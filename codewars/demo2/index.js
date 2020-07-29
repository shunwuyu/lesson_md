var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);   
Number.prototype.add = function(num) {
  console.log(this, '-----------');
  return this + num;
}

var c = 11;
console.log(c.add(5).multiply(2))
// console.log(c.add(12)); 