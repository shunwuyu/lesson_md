function longestValidParentheses(s) {
  var max = 0;
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(i); //下标入栈
    } else {
      stack.pop();
      if (stack.length < 1) { //为空
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
}

console.log(longestValidParentheses('())(())'));