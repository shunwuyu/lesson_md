from typing import List

class Solution:
    def distributeCandies(self, candies: List[int]) -> int:
        return min(len(set(candies)), len(candies) >> 1)

# Solution.distributeCandies(self,[1,1,2,2,3,3])
x = Solution()
print("MyClass 类的方法 f 输出为：", x.distributeCandies([1,1,2,2,3,3]))
# x.distributeCandies