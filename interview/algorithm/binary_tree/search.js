function searchBST(root, val) {
  if (root == null) { return null; }
  if (root.val == val) { return root; }
  // console.log(val < root.val);
  if (val < root.val) { return searchBST(root.left, val); }
  return searchBST(root.right, val);
}
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var a1 = new TreeNode(5);
var a2 = new TreeNode(1);
var a3 = new TreeNode(9);
var a4 = new TreeNode(8);
var a5 = new TreeNode(10);
a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;
console.log(searchBST(a1, 9));
