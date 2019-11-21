class Solution:
    def rob(self, nums:List[int])->int:
        """
        :type nums: List[int]
        :rtype: int
        """
        if nums==[]:
            return 0
        if len(nums)==1:
            return max(nums)
        dp = [0]*(len(nums)+2)
        dp[0] = 0
        dp[1] = 0
        for i in range(2, len(nums)):
            dp[i] = max(dp[i-2] + nums[i-2],dp[i-1])
        
        return dp[len(nums)+1]