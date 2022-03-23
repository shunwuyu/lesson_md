class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null;
        this.right = null;
    }
}

const t1 = new TreeNode(3);
const t2 = new TreeNode(9);
const t3 = new TreeNode(20);
const t4 = new TreeNode(15);
const t5 = new TreeNode(7);
t1.left = t2;
t1.right = t3;
t3.left = t4;
t3.right = t5;

// var maxDepth = function (root) {
//     if (!root) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// };

// console.log(maxDepth(t1))

var maxDepth = function (root) {
    if(!root) return 0
    let queue = [root],
        res = 0;
    while(queue.length) {
        let temp = []
        for(let i = 0; i < queue.length; i++) {
            if(queue[i].left) temp.push(queue[i].left)
            if(queue[i].right) temp.push(queue[i].right)
        }
        res += 1
        queue = temp
    }
    return res
};
console.log(maxDepth(t1))