function infomation ({ name, age, height }) {
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