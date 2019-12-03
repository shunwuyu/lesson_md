function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var postorderTraversal = function(root) {
  // 1. Recursive solution

  // if (!root) return [];

  // return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.val);

  // 2. iterative solutuon

  if (!root) return [];
  const ret = [];
  const stack = [root];
  let p = root; // 标识元素，用来判断节点是否应该出栈

  while (stack.length > 0) { // 
    const top = stack[stack.length - 1]; //顶部
    if (
      top.left === p ||    
      top.right === p || // 子节点已经遍历过了
      (top.left === null && top.right === null) // 叶子元素
    ) {
      p = stack.pop();
      ret.push(p.val);
    } else {
      if (top.right) {
        stack.push(top.right);
      }
      if (top.left) {
        stack.push(top.left);
      }
    }
  }

  return ret;
};

var a1 = new TreeNode(1);
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);

a1.right = a2;
a2.left = a3;

console.log(postorderTraversal(a1));

