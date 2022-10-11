/** 
 @param {string} s
 @return {boolean}
*/
var isValid = function(s) {
  if(!s || s.length < 1) return true;
  var n = s.length;
  // let valid = true; //boolean 如果后面不是有效括号，值为false
  const stack = []; // 数尾只在最后插入和弹出， 就是栈FILO。 在最后插入，最前面删除 就是队列FIFO
  // const mapper = { // 消除呢？ 匹配机制
  //   '{': "}",
  //   "[": "]",
  //   "(": ")"
  // }
  for (var i = 0; i <n; i++) { //遍历
    const c = s[i];
    if (c == '(') { //如果有左括号就进栈
      stack.push(c);
    } else {
      // const peak = stack.pop(); //出栈
      // if (v !== mapper[pea k]) { //栈顶元素是否与当前元素匹配
      //   return false;
      // }
      if (stack.length < 1) {
        return false
      }else {
        stack.pop() 
      }
    }
  }
  return stack.length > 0? false: true;
}

console.log(isValid('()'));//true
console.log(isValid('(())('));//false
