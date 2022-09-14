const dogs = new Map();
dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);

let obj = {a:1, c:2, ff: 5, '1':33, b:3}

console.log(dogs.size);
console.log(dogs.get('Hugo'))
dogs.set(obj, 5); // 对象作为key
console.log(dogs.get(obj))

for (const [key, val] of dogs) {
    console.log(key, val);
}
// obj is not iterable
// Object 的存储是无序的，但是 Map 的存储是有序的
// ，在遍历过程中会根据值的插入顺序
// for (const item of obj) {
//     console.log(item);
// }
// Object 的存储是无序的
for (let key in obj) {
    console.log(key);
}