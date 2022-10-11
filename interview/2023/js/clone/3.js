// 当属性对应的一个值是引用类型时
var user1 = {
    name: "法医",
    like: {
        eat: "面条",
        sport: "篮球",
        },
   };
             
var user2 = Object.assign({}, user1);
console.log(user1); //{name: '法医', like: {eat: '面条', sport: '篮球'}}
console.log(user2); //{name: '法医', like: {eat: '面条', sport: '篮球'}}
user1.name = "前端猎手";
console.log(user1); //{name: '前端猎手', like: {eat: '面条', sport: '篮球'}}
console.log(user2); //{name: '法医', like: {eat: '面条', sport: '篮球'}}
user1.like.eat = "米饭";
console.log(user1); //{name: '前端猎手', like: {eat: '米饭', sport: '篮//{name: '法医', like: {eat: '面条', sport: '篮球'}}球'}}
console.log(user2); 
