[leetcode](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-ci-bian-li-by-leetcode/)
[code]()
### 遍历一棵树
- 深度优先搜索 DFS  以便从跟开始一直到达某个确定的叶子  然后再返回根到达另一个分支。
深度优先搜索策略又可以根据根节点、左孩子和右孩子的相对顺序被细分为先序遍历，中序遍历和后序遍历
- 宽度优先搜索 BFS

[3, 9 20, null, null, 15, 7]
[
  [3],
  [9, 20],
  [15, 7]
]

队列
- 建立一个queue
- 先把根节点放进去，这时候找根节点的左右两个子节点
- 去掉根节点，此时queue里的元素就是下一层的所有节点
- 用for循环遍历，将结果存到一个一维向量里
- 遍历完之后再把这个一维向量存到二维向量里
- 以此类推，可以完成层序遍历

// 每个分层， null 做为一层的分隔
levelNode 负责装 每层的结点
queue 负责每个节点的进退
items  每层的结果
