dict = {}
class Solution:
    def climbStairs(self, n: int) -> int:
       
        if n == 1:
          return 1
        if n == 2:
          return 2
        if dict.get(n):
          return dict.get(n)
        
        ret = self.climbStairs(n-1) + self.climbStairs(n-2)
        dict[n] = ret
        return ret

solution = Solution()
print(solution.climbStairs(130))