const BinaryTreeNode = require('./BinaryTreeNode');

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null) {
    super(value);
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return this;
    }

    if (this.value > value) {
      if (this.left) {
        return this.left.insert(value);
      }
      const newNode = new BinarySearchTreeNode(value);
      this.setLeft(newNode);
    }

    if (this.value < value) {
      if (this.right) {
        return this.right.insert(value);
      }
      const newNode = new BinarySearchTreeNode(value);
      this.setRight(newNode);
      return newNode;
    }
    return this;
  }

  find(value) {
    if (this.value == value) {
      return this;
    }
    if (this.left && this.value > value) {
      // Check left nodes.
      return this.left.find(value);
    }
    if (this.right && this.value < value) {
      // Check left nodes.
      return this.right.find(value);
    }
    return null;
  }
}


const bstNode = new BinarySearchTreeNode(2);
const insertedNode1 = bstNode.insert(1);
const insertedNode2 = bstNode.insert(3);

console.log(bstNode.toString());