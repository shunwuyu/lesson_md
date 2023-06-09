/**
 * 返回给定字符串的最长回文子串
 * @param {string} s - 给定字符串
 * @return {string}
 */
function longestPalindrome(s) {
    const n = s.length;
    // Array.from() 方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例
    // arrayLike：想要转换成数组的类数组对象或可迭代对象。
    // mapFn（可选参数）
    const dp = Array.from(Array(n), () => Array(n).fill(false)); // 初始状态：dp[i][j]=false
    let start = 0; // 记录回文子串的起始位置
    let maxLen = 1; // 记录回文子串的最大长度
  
    // 初始化边界条件（单个字符一定是回文子串）
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
    }
  
    // 枚举子串的长度
    for (let len = 2; len <= n; len++) {
      // 枚举子串的起始位置
      for (let i = 0; i < n; i++) {
        const j = i + len - 1; // 子串的结束位置
        if (j >= n) break; // 如果结束位置超出字符串范围，则退出循环
        if (s.charAt(i) !== s.charAt(j)) {
          // 如果当前字符不匹配，则当前子串不可能是回文子串
          dp[i][j] = false;
        } else {
          if (len <= 3) {
            // 如果子串长度小于等于3，则一定是回文子串
            dp[i][j] = true;
          } else {
            // 否则，需要判断去掉左右两个字符后的子串是否是回文子串
            dp[i][j] = dp[i + 1][j - 1];
          }
        }
        // 如果当前子串是回文子串，并且长度比之前找到的最长回文子串更长，则更新最长回文子串的起始位置和长度
        if (dp[i][j] && len > maxLen) {
          start = i;
          maxLen = len;
        }
      }
    }
    // 返回最长的回文子串
    return s.substring(start, start + maxLen);
}
// 时间复杂度O(n^2) 空间复杂度O(n^2)
longestPalindrome('sdxaacdcadggsd')