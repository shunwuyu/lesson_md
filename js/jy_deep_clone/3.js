function clone(target) {
  let cloneTarget = {};
  for (const key in target) {
    cloneTarget[key] = target[key];
  }
  return cloneTarget;
}

let obj = {
  a: 1
}
let obj2 = clone(obj);
// console.log(obj2);