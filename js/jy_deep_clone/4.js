// 如果是原始类型，无需继续拷贝，直接返回
// 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
//递归解决问题
const target = {
  field1: 1,
  field2: undefined,
  field3: 'ConardLi',
  field4: {
      child: 'child',
      child2: {
          child2: 'child2'
      }
  }
};

function clone(target) {
  if (typeof target === 'object') {
      let cloneTarget = {};
      // 兼容数组
      // let cloneTarget = Array.isArray(target) ? [] : {};
      for (const key in target) {
          cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

let obj2 = clone(target);
console.log(obj2);
