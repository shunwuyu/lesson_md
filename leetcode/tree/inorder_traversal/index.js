function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var inorderTraversal = function(root) {
  let arr = [];
  const inorder = root => {
    if (root === null) return null;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root)
  return arr;
}

// let node = new TreeNode(1);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(3);
// node.right = node2;
// node2.left = node3;
// console.log(inorderTraversal(node));

let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
a1.left = a2;
a1.right = a3;
let a4 = new TreeNode(4);
let a5 = new TreeNode(5);
a2.left = a4;
a2.right = a5;
let a6 = new TreeNode(6);
let a7 = new TreeNode(7);
a3.left = a6;
a3.right = a7;
console.log(inorderTraversal(a1));

