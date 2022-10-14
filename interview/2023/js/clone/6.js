// JSON.parse(JSON.stringify(待拷贝对象))
var user = {
    name: "法医",
    age: 18,
    like: {
        eat: "面条",
        sport: "篮球",
    },
};

var target = JSON.parse(JSON.stringify(user));
target.like.eat = "米饭";

console.log(user);
console.log(target);