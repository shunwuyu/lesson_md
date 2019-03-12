/**
 * 功能是 决定字符串中的符号是正确的
 * @params str 字符串，包含()[]{}
 */
const isValid = (str) => {
  let sta = [], obj = {};
  obj["{"] = "}";
  obj["["] = "]";
  obj["("] = ")";;
  for (let i = 0; i < str.length; i++) {
    // sta.push(str[i]);
    if (!sta.length) {
      sta.push(str[i]);
    } else {
      // sta[sta.length -1 ], str[i]
      if (str[i] === obj[sta[sta.length-1]]) {
        sta.pop();
      } else {
        sta.push(str[i]);
      }
    }
  }

  return !sta.length;

  // 1. 空栈先入栈
  // 2. 将栈顶元素匹配的消除规则元素与待入栈相比较, 相同则 pop 栈顶元素，
  // 否则入栈
  // 3. 重复2  
  // 4. 判断数组的长度，返回bool

  // 将符号字符入栈 stack   0 栈底 
  // str.length -1 顶部
  
  console.log(sta);
}
console.log(isValid('()'));  //true
console.log(isValid('()[]{}'))//true
console.log(isValid('{[]}')); //true
console.log(isValid('(])'));  //false