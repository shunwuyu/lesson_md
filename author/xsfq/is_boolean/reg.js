var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

function isBalanced(exp) {
  var reg = /{}/g, len;
  do {
    len = exp.length;
    exp = exp.replace(reg, "")
  } while(len != exp.length) // 不为空
  return exp.length === 0
}

console.log(isBalanced(expression));
console.log(isBalanced(expressionFalse));