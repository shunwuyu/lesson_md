function isSameTree(p, q) {
    if (p === null && q === null) { //两个节点都为空，相等
      return true;
    } else if (p === null || q === null) { //一个节点为空，不相等
      return false;
    } else if (p.val !== q.val) { //节点值不相等，不相等
      return false;
    } else { //递归比较左右子树
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
  }


  const p = {val: 1, left: {val: 2, left: null, right: null}, right: {val: 3, left: null, right: null}};
  const q = {val: 1, left: {val: 2, left: null, right: null}, right: {val: 3, left: null, right: null}};
  console.log(isSameTree(p, q));