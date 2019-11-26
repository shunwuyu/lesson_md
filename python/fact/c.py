class Solution:
    def climbStairs(self, n: int) -> int:
        if n<=2:
            if n==2:
                return 2
            else:
                return 1
        else:
            return self.climbStairs(n-1)+self.climbStairs(n-2)

solution = Solution()
# print(solution.climbStairs(7))
# print(solution.climbStairs(30))
