/**
 * 
 * @param {*} objA 
 * @param {*} objB 
   判断两个对象相不相等
   相等 true 那么 shouldComponentUpdate return false 阻止跟新

   props / state 只要必须两个都相等 才能 阻止 
   !(shallowEqual(props) && shallowEqual(state))

   
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }
//这里只比较了对象A和B第一层是否相等，当对象过深时，无法返回正确结果
  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}