const obj = {x:1} 
let copy2 = Object.assign({}, obj)
copy2.x = 2;
console.log(obj);
// var user1 = {
//     name : "法医"
// }
// var user2 = Object.assign(user1, {age : 18}, {sex : 'male'});
// console.log(user2);
// user2.name = 'df';
// console.log(user1);