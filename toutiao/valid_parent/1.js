/** 
 @param {string} s
 @return {boolean}
*/
var isValid = function(s) {
  let valid = true; //boolean 如果后面不是有效括号，值为false
  const stack = []; // 数尾只在最后插入和弹出， 就是栈FILO。 在最后插入，最前面删除 就是队列FIFO
  const mapper = { // 消除呢？ 匹配机制
    '{': "}",
    "[": "]",
    "(": ")"
  }
  for (let i in s) { //遍历
    const v = s[i];
    if (['(', '[', '{'].indexOf(v) > -1) { //如果有左括号就进栈
      stack.push(v);
    } else {
      const peak = stack.pop(); //出栈
      if (v !== mapper[peak]) { //栈顶元素是否与当前元素匹配
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return valid;
}

console.log(isValid('()[]{}'));//true
console.log(isValid('(]')); //false
console.log(isValid('([)]')); // false