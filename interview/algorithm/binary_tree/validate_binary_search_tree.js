function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var isValidBST = function(root) {
  return isValidBSTHelper(root, null, null);
};

function isValidBSTHelper(root, min, max) {
  if (root === null) {
      return true;
  }
  
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false;
  }
  
  return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}

var a1 = new TreeNode(5);
var a2 = new TreeNode(1);
var a3 = new TreeNode(9);
var a4 = new TreeNode(8);
var a5 = new TreeNode(10);
console.log(isValidBST(a1));