class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null; // 父节点？
    this.value = value;
  }

  setValue(value) {
    this.value = value;

    return this;
  }

  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }
    this.left = node;
    if (this.left) {
      this.left.parent = this;
    }
    return this;
  }

  setRight(node) {
    // Reset parent for right node since it is going to be detached.
    if (this.right) {
      this.right.parent = null;
    }

    // Attach new node to the right.
    this.right = node;

    // Make current node to be a parent for new right one.
    if (node) {
      this.right.parent = this;
    }

    return this;
  }

  traverseInOrder() {
    let traverse = [];
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }
    traverse.push(this.value);
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }
    return traverse;
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  toString() {
    return this.traverseInOrder().toString();
  }

  get uncle() {
    
  }
}

// 作业  叔叔节点
const leftNode = new BinaryTreeNode(1);
const rightNode = new BinaryTreeNode(3);
const rootNode = new BinaryTreeNode(2);

rootNode
  .setLeft(leftNode)
  .setRight(rightNode);
//中序遍历
// console.log(rootNode.traverseInOrder());
console.log(rootNode.toString());

const grandLeft = new BinaryTreeNode(5);
const grandRight = new BinaryTreeNode(6);
const grandGrandLeft = new BinaryTreeNode(7);
leftNode
  .setLeft(grandLeft)
  .setRight(grandRight)

grandLeft.setLeft(grandGrandLeft);
console.log(rootNode.height);

module.exports = BinaryTreeNode;