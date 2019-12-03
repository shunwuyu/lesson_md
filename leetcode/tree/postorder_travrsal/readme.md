[source](https://github.com/azl397985856/leetcode/blob/master/problems/145.binary-tree-postorder-traversal.md)

前序遍历是通过一个stack，首先压入父亲结点，然后弹出父亲结点，并输出它的value，之后压人其右儿子，左儿子即可。
输出情况有两种   它已经是叶子结点, 第二， 它不是叶子结点， 但是它的儿子已经输出过。

