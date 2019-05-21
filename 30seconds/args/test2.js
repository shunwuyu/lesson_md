function infomation (
  name, sex, height, birthday, 
  color, likes, follow, age
) {
  // ...
}

console.log(infomation('叶清', '男', 181, '6-1', '黄', '你懂得', ['张杰'], 18));
let user = {name: '叶清', sex: '男', height: 181, birthday: '6-1', color: '黄', likes: '你懂得',follow:['张杰'], age: 18}
console.log(infomation(user));
