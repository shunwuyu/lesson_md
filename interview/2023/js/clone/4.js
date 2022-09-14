// 我们发现 ES6 扩展运算符也是浅拷贝
var user1 = {
    name: "法医",
    like: {
        eat: "面条",
        sport: "篮球",
        },
   };
             
var user2 = {...user1};
console.log(user1); //{name: '法医', like: {eat: '面条', sport: '篮球'}}
console.log(user2); //{name: '法医', like: {eat: '面条', sport: '篮球'}}
user1.name = "前端猎手";
console.log(user1); //{name: '前端猎手', like: {eat: '面条', sport: '篮球'}}
console.log(user2); //{name: '法医', like: {eat: '面条', sport: '篮球'}}
user1.like.eat = "米饭";
console.log(user1); //{name: '前端猎手', like: {eat: '米饭', sport: '篮//{name: '法医', like: {eat: '面条', sport: '篮球'}}球'}}
console.log(user2); //{name: '法医', like: {eat: '米饭', sport: '篮球'}}
