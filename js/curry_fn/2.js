function checkByRegExp(regExp,string) {
  return regExp.test(string);  
}
console.log(checkByRegExp(/^1\d{10}$/, '18642838455'));
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@163.com'));
