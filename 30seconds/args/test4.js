function infomation ({ name = '没有留下', age = 0, height = 160 }) {
  console.log({
    name,
    age,
    height
  });
}

const user = {
  name: '用户名',
  age: 18,
  height: 191
}

infomation(user);