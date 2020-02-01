function longestValidParentheses(s) {
  var max = 0; //初始为0
  var stack = [-1]; //哨兵节点
  for (var i = 0; i < s.length; i++) { //存下标解法， 只要一次遍历，时间复杂度为O（n）
    if (s[i] == '(') { //
      stack.push(i); //左括号 下标入栈 
    } else {
      stack.pop(); //右括号 下标出栈
      if (stack.length < 1) { 
        stack.push(i); // 栈顶元素都没有了， 那么前面的有效匹配结束了，后面的开始， 那就要减去当前的下标， 所以push 当前的下标
      } else {
        // 如果有可匹配括号， max 变大  下标减去当前栈顶的下标
        //(()) 还是可以算出最大长度的
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
}

console.log(longestValidParentheses('())(())'));