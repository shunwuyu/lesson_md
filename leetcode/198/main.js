var rob = function(nums) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < nums.length + 2; i++) {
            // 选择     不选择]
    // 当前位置的最大值 是n-1房屋可盗窃的最大值， n-2个房屋的最大值
    dp[i] = Math.max(dp[i-2] + nums[i - 2], dp[i - 1])
  }
  console.log(dp);
  return dp[nums.length + 1];
}

console.log(rob([2,7,9,3,1]))