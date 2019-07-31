function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function deepth(node) {
    if(node!=null){
       var dl = deepth(node.left);
       var dr = deepth(node.right);
       deep = dl > dr? dl: dr;
       return deep++;
    }
}

const a1 = new TreeNode(1);
const a2 = new TreeNode(2);
const a3 = new TreeNode(3);
const a4 = new TreeNode(4);
const a5 = new TreeNode(5);
const a6 = new TreeNode(6);
const a7 = new TreeNode(7);
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a4.left = a6;
a5.right = a7;
console.log(deepth(a1));



