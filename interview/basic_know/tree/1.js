var preorderTraversal = function(root) {
    let res = [];
    // 遍历函数
    function traversal(root) {
        if (root !== null) {
            // 访问根节点的值
            res.push(root.val);
            if (root.left) {
                // 递归遍历左子树
                traversal(root.left);
            };
            if (root.right) {
                // 递归遍历右子树
                traversal(root.right);
            };
        };
    };
    traversal(root);
    return res;
};