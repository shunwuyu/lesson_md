var user1 = {
    name : '法医',
    age : 18
}
var user2 = user1;
user2.name = "前端猎手";
console.log(user1); // { name: '前端猎手', age: 18 }
console.log(user2);
