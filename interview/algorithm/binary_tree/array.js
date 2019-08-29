
var levelOrder = function(root) {
  let ans = []
  helper(root, ans, 0)
  return ans
};

function helper(node, ans, i){
  if (node == null) return
  if (i == ans.length) ans.push([])
  ans[i].push(node.val)

  helper(node.left, ans, i + 1)
  helper(node.right, ans, i + 1)
}

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var a1 = new TreeNode(3);
var a2 = new TreeNode(9);
var a3 = new TreeNode(20);
var a4 = new TreeNode(15);
var a5 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;
console.log(levelOrder(a1));