from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = nums[0]
        for  i in range(len(nums)):
            for j in range(i, len(nums)):
                s = 0
                for k in range(i, j ):
                    s += nums[k]
                if s > ans:
                    ans = s
        return ans

solution = Solution()
print(solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


class Demo:
	def add(self, a, b) -> int:
		ans = a + b
		return ans

res = Demo()
print(res.add(1, 2))