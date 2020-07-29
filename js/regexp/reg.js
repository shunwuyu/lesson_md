// https://www.cnblogs.com/lst619247/p/9289719.html
function isEmail(email) {
  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(email);
}
console.log(isEmail("754211506@qq.com"));

function isCardNo(number) {
  var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return regx.test(number);
}
console.log(isCardNo("360313199802010856"));

function isPhone(tel) {
  var regx = /^1[34578]\d{9}$/;
  return regx.test(tel);
}

console.log(isPhone("12156787656"));