function postorder(root) {
    // 递归边界，root 为空
    if(!root) {
        return 
    }
     
    // 递归遍历左子树 
    postorder(root.left)  
    // 递归遍历右子树  
    postorder(root.right)
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)  
}