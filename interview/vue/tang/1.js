// class Node {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function preOrderTraversal(root, result = []) {
//     if (!root) return result;
  
//     result.push(root.val);
//     preOrderTraversal(root.left, result);
//     preOrderTraversal(root.right, result);
  
//     return result;
//   }
// 层序遍历
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function levelOrderTraversal(root) {
    if (!root) return [];
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        currentLevel.push(currentNode.val);
  
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
  
      result.push(currentLevel);
    }
  
    return result;
  }