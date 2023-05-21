function memoize(fn) {
    const cache = new Map(); // 使用 Map 存储已经计算过的结果
    return function (...args) {
      const key = JSON.stringify(args); //将参数序列化成字符串作为键值
      if (cache.has(key)) {
        return cache.get(key); // 若已经计算过，直接返回缓存的值
      }
      const result = fn.apply(this, args); // 调用原函数计算结果
      cache.set(key, result); // 将结果缓存到 Map 中
      return result; // 返回计算结果
    }
  }

- 介绍一下e.target和e.currentTarget的区别
  