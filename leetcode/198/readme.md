[source](https://leetcode-cn.com/problems/house-robber/)

专业的小偷， 沿街的房屋。一定的现金，
相邻的房屋装有相互连通的防盗系统， 
相邻的房屋在同一个晚上被小偷冯入， txxiwfc自动报或许

[1, 2, 3, 1]

动态规划问题，   dp 数组  [i]个房子 偷还是不偷的问题。 就是当前的房子可以抢的价值 + dp[i - 2]
i -1 不能抢， 
不抢就是 dp[i-1];

          ABCD  
    A                不选择A
   CD                BCD
  C  D            B       不选择B   
                  D       CD
                         C   D 

[1,2,3,1]

i =2
dp[2] = 0 + 1 = 1    0    [0, 0, 1]
i=3
dp[3]= 0 + 2 =2 1       [0, 0, 1, 2]
i=4
dp[4]=1+3=4 ,2          [0,0,1,2,4]
i=5
dp[5]=2+1=3,4         [0,0,1,2,4,4]
i=6
4