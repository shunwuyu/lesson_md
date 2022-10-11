var longestPalindrome = function(s) {
  if (!s || s.length === 0) {
    return ''
  }
  let res = s[0]; // 初始值  一个字符肯定是回文字符
  const dp = []; // dpTable 
  // dp[i][j]  s中从i j
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      // console.log(i, j, '-------')
      if (j - i === 0) dp[i][j] = true; // 同一位置一定是
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;// 相邻相等
      else if (s[i] === s[j] && dp[i + 1][j - 1]) { // 相等， 且内部也是回文
        dp[i][j] = true;
      }
      // 
      if (dp[i][j] && j - i + 1 > res.length) {// 整个都走完了
        // update res
        res = s.slice(i, j + 1);
      }
    }

  }
  console.log(dp);
  return res
}

console.log(longestPalindrome('babad'))