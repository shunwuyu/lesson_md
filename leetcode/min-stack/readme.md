[source](https://github.com/azl397985856/leetcode/blob/master/problems/155.min-stack.md)

push pop top 操作， 常数时间内检索到最小元素的栈

- 最小栈存储的不应该是真实值，而是真实值和min的差值
- top的时候涉及到对数据的还原，这里千万注意是上一个最小值

当前元素没有入栈时的最小值pop top  顶元素 加一个最小值  push pop 时去更新min,  返回min 

如何求得上一个最小值，  min
- 小于0, 当前最小的元素， 对min 产生影响， 需要去更新min。 
min-栈顶元素, 小值
- 如果大于0, 说明它对最小值没有影响， 上一个最小值是上上最小值。 

[-3, 0, -2, -4]    min   top   pop
-3    this.min = -3   [-1.7976931348623157e+308]
0     this.min = -3   [-1.7976931348623157e+308, x-min = 3]  pop 3 + this.min = 0   
-2    this.min = -3  [-1.7976931348623157e+308, x-min = 1] 
pop 1 + this.min = -2  
