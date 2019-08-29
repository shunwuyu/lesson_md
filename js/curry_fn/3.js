function checkByRegExp(regExp,string) {
  return regExp.test(string);  
}

let _check = curry(checkByRegExp);
let checkCellPhone = _check(/^1\d{10}$/);
let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

checkCellPhone('18642838455');
checkEmail('test@163.com');

