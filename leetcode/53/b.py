from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      thissum = 0
      maxsum = float("-inf")
      for i in range(0, len(nums)):
        thissum = 0
        for j in range(i, len(nums)):
          thissum += nums[j]
          if thissum > maxsum:
            maxsum = thissum
      return maxsum


solution = Solution()
print(solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))