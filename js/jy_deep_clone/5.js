const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target;

// function clone(target) {
//   if (typeof target === 'object') {
//       let cloneTarget = {};
//       // 兼容数组
//       // let cloneTarget = Array.isArray(target) ? [] : {};
//       for (const key in target) {
//           cloneTarget[key] = clone(target[key]);
//       }
//       return cloneTarget;
//   } else {
//       return target;
//   }
// };

// [Circular]   WeakMap  Map 画龙点睛的作用
// function clone(target, map = new Map()) {
function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      // console.log()
      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          cloneTarget[key] = clone(target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

console.time();
const result = clone(target);
console.log(result);
console.timeEnd();