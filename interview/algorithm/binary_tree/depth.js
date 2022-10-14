var maxDepth = function(root) {
  if (root == null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
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

console.log(maxDepth(a1));
