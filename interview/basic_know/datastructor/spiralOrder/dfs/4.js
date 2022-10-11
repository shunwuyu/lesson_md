var levelOrder = function (root) {
    let res = [],
        que = [root];
    if (!root) return []
    while (que.length) {
        let temp = [],
            ans = []
        for (let i = 0; i < que.length; i++) {
            ans.push(que[i].val)
            if (que[i].left) temp.push(que[i].left)
            if (que[i].right) temp.push(que[i].right)
        }
        res.push(ans)
        que = temp
    }
    return res;
};
