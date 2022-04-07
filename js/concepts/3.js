const obj = {
    name: '小智',
    food: '鸡腿'
}
// 解构
const { name, food } = obj;
console.log(name, food);

// 支持取别名
const { name: myName, food: myFood } = obj;
console.log(myName, myFood); // 小智 鸡腿