function isEqual(obj1, obj2) {
  // 如果类型不同，直接返回 false
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  
  // 如果是基本数据类型或者 null，则直接比较值
  if (obj1 === null || ['string', 'number', 'boolean'].includes(typeof obj1)) {
    return obj1 === obj2;
  }
  
  // 如果是数组，则逐个比较每个元素
  if (Array.isArray(obj1)) {
    if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }
  
  // 如果是对象，则递归比较每个属性
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (!isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  
  // 其他类型的数据暂不考虑
  return false;
}

const obj1 = { a: 1, b: { c: 2 }, d: [3, 4] };
const obj2 = { b: { c: 2 }, d: [3, 4], a: 1 };

if (isEqual(obj1, obj2)) {
  console.log('两个对象相等');
} else {
  console.log('两个对象不相等');
}