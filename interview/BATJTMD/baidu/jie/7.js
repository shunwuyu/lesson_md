const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log('两个对象相等');
} else {
  console.log('两个对象不相等');
}