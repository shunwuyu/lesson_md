# 螺旋矩阵
    小灰算法
    经典算法题

- 小红书鸣人的螺旋丸
    m*n的二位数组
    按螺旋顺序， 返回数组中所有元素
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c57a8c510864e4186b800ab344fa211~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)


- 上手蛮困难的   acm 常考题  抽象和编码能力  
    1. 遍历的顺序一直在变化，
        有规律
            每一次改变顺序其实都是向左转了90度。
    2. 变化的速度也是在变化的

[](https://juejin.cn/post/7023559168585891848)

1. 
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c57a8c510864e4186b800ab344fa211~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    输入 matrix = [[1,2,3],[4,5,6],[7,8,9]]
    输出 [1,2,3,6,9,8,7,4,5]

    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2a7ac3a66fb4512b55f675882c23e88~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)
    **输入：**matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

    - m == matrix.length
    - n == matrix[i].length
    - 1 <= m, n <= 10
    - -100 <= matrix[i][j] <= 100

- 首先要判断空数组，返回[]
- 无限循环，访问四条边，若越界，则说明访问完了，退出

- 难度
    m  n   
    如何走四条边？
        边界  left  0 , right  n-1, up  0, down  m-1
        - 从左向右  [i][j] j的值在变 for (let j = left; j <= right; j++) res.push(matrix[up][j]);
        做完后 最上面行干完了， up + 1    
        退出条件  if (up > down) break;

        - 从上到下   [i][j] i的值在变   for (let i = up; i <= down; i++) res.push(matrix[i][right]);
        做完后 第右边列干完了， right - 1
        退出条件   if (right < left) break;
        - 从右到左   [i][j] j 的值在变 for (let j = right; j >= left; j--) res.push(matrix[down][j]);
        做完后 最下面行干完了， down - 1
        退出条件 if (down < up) break;
        - 从下到上   [i][j] i的值在变   for (let i = down; i >= up; i--) res.push(matrix[i][left]);
            left + 1
        退出条件   if (left > right)
    如何判断退出条件 
