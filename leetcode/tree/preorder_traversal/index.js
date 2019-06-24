function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var preorderTraversal = function(root) {
  var store = [],
    result = [],
    cur;
  
  if (root === null) {
    return store;
  }

  store.push(root);
  while(store.length > 0) {
    cur = store.pop();
    result.push(cur.val);
    if (cur.right) { //让右子树进去， 
      //在底部， 左子树先解决 
      store.push(cur.right);
    }
    if (cur.left) {
      store.push(cur.left);
    }
  }
  return result;
}

var a1 = new TreeNode(4);
var a2 = new TreeNode(2);
var a3 = new TreeNode(6);
var a4 = new TreeNode(1);
var a5 = new TreeNode(3);
var a6 = new TreeNode(5);
var a7 = new TreeNode(7);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;

console.log(preorderTraversal(a1));

