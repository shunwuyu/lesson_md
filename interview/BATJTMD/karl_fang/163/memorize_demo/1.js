const _ = require('lodash');

// 定义斐波那契数列的计算函数
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 对斐波那契数列的计算函数进行缓存
const memoizedFibonacci = _.memoize(fibonacci);
console.time()
console.log(memoizedFibonacci(10)); // 第10个斐波那契数列：55
console.timeEnd()
console.time()
// 第10个斐波那契数列被缓存，再次调用时无需计算直接返回结果
console.log(memoizedFibonacci(10)); // 第10个斐波那契数列：55
console.timeEnd() // 不花时间