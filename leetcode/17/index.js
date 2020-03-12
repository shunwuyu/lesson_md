// list 数组里的， tempList, 
function backtrack(list, tempList, digits, start, keys ) {
  //退出条件 tempList 长度 等于 digits 长度时
  if (tempList.length === digits.length) {
    console.log(tempList, digits, '------');
    return list.push(tempList.join(''));
  }
  // 从第几个开始， 每个字符拿出来
  for (let i = start; i < digits.length; i++) {
    //得到字符
    const chars = keys[digits[i]];
    for (let j = 0; j < chars.length; j++) {
      // console.log(chars[j]);
      tempList.push(chars[j]);
      // 递归思想
      backtrack(list, tempList, digits, i + 1, keys);
      // 搞完一个了 
      tempList.pop();
    }
  }
}
var letterCombinations = function(digits) {
  // 若为空， 则直接返回
  if (digits.length === 0) return [];
  // 字符印射的字符映数组 为了下标
  const keys = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];

  const list = [];
  backtrack(list, [], digits, 0, keys);
  return list;
}

console.log(letterCombinations('234'));