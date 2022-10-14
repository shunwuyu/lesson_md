var rob = function(nums) {
    let length = nums.length;
    if (length == 1) {
        return nums[0];
    }
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[length - 1];
  };

  console.log(rob([2, 7, 9, 3, 1]))
  