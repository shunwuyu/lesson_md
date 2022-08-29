// 上面这两个方法，一个是截取，一个是拼接，这两个方法也可以用于拷贝数组
var user1 = ["法医",{eat:"面条",sport:"篮球"}];
var user2 = user1.slice();
var user3 = user1.concat();
console.log(user1);
console.log(user2);
console.log(user3);
user1[0] = "前端猎手";
console.log(user1);
console.log(user2);
console.log(user3);
user1[1].eat = "米饭";
console.log(user1);
console.log(user2);
console.log(user3);