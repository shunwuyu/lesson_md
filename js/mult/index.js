// 缓存计算结果 不要重复计算，
// 计算了的， 保存 哪里？ 方式？
let cache = {};
// 1,2,3   4,5,6  
// key string <=   arguments 类数组

function mult() {
  // 参数数量是不定的
  let a = 1;
  let key = Array.prototype.join.call(arguments, ',');
  // args相关， 数组=》 string key 12*3 1* 23
  // [1, 2, 3]  "1,2,3"

    if (cache[key]) {
    console.log('从缓存中取');
    return cache[key];
  }
  
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  cache[key] = a;
  return a;
}
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));