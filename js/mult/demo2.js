var cache = {};

var mult = function() {
  var args = Array.prototype.join.call(arguments, ',');
  if (cache[args]) {
    console.log('缓存');
    return cache[args];
  }
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a  = a * arguments[i];
  }
  return cache[args] = a;
}

console.log(mult(1,2,3));
console.log(mult(1,2,3));
