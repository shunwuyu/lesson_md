class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null;
        this.right = null;
    }
}
var levelOrder = function(root) {
    let res = [];

    function traversal(root, depth) {
        if (root !== null) {
            if (!res[depth]) {
                res[depth] = [];
            };
            res[depth].push(root.val)
            if (root.left) {
                traversal(root.left, depth + 1);
            };
            if (root.right) {
                traversal(root.right, depth + 1);
            };
        };
    };
    traversal(root, 0);
    return res;
};

const t1 = new TreeNode(3);
const t2 = new TreeNode(9);
const t3 = new TreeNode(20);
const t4 = new TreeNode(15);
const t5 = new TreeNode(7);
t1.left = t2;
t1.right = t3;
t3.left = t4;
t3.right = t5;
// console.log(t1);
console.log(levelOrder(t1));