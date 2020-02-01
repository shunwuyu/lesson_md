function longestValidParentheses(s) {
    var max = 0; //最大长度
    if (s.length == 0 || s.length == 1) return max;
    var stack = []; //用栈来解决 空间复杂度为O(n)
    for (var i = 0; i < s.length; i++) { //使用嵌套循环 时间复杂度O(n^2)  暴力比较每位字符， 可以有效匹配的最大长度
      var tmpMax = 0; //初始化为0 ， 每位字符的最大匹配长度
      
      for (var j = i; j < s.length; j++) { //从i开始， 自己也算1
        // 算法思想还是当前字符串后面有多少位可以组成有效括号
        if (s[j] == '(') { 
          stack.push('('); //左括号入栈
          tmpMax++; //(((( 带着这个问题
        } else if (s[j] == ')') {
          if (stack.length < 1) {
            max = max<tmpMax?tmpMax:max; //有效括号的状态提前结束，只有在有右括号出现的时候， 长度的增加才有意议
            break;
          } else {
            stack.pop(); // 出栈 消除左括号
            tmpMax++; //长度加1
          }
        }
      }
      // if (i == 0) console.log(stack.length, '-----');
      if (stack.length == 0) { //如果栈为空， 表示有效
        max = max < tmpMax?tmpMax:max; //整个都是有效括号时 更新max的值， 
      }
      stack = []; //stack为下一次清空
    }
    return max;
}
console.log(longestValidParentheses('((((((('));
// console.log(longestValidParentheses('()'));
// console.log(longestValidParentheses('())(())'));
