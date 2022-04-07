// 解构经常也用于直接用于提取传给函数的参数
const person = {
    name: '小智',
    age: 24
}

function introduce({ name, age }) {
    console.log(`我是 ${name} ，今天 ${age} 岁了!`);
}

introduce(person);// 我是 小智 ，今天 24 岁了!