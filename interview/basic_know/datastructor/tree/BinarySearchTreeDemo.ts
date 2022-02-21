import BinarySearchTree from "./lib/BinarySearchTree";

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(15);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
binarySearchTree.insert(10);
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(18);
binarySearchTree.insert(25);
binarySearchTree.insert(6);

// 测试中序遍历函数
const printNode = (value : any) => console.log(value);
console.log("中序遍历");
binarySearchTree.inOrderTraverse(printNode);
// // 测试先序遍历
// console.log("先序遍历");
// binarySearchTree.preOrderTraverse(printNode);
// // 测试后序遍历
// console.log("后序遍历");
// binarySearchTree.postOrderTraverse(printNode);
// // 测试获取最小值函数
console.log("树的最小值",binarySearchTree.min());
// // 测试获取最大值函数
// console.log("树的最大值",binarySearchTree.max());
// // 测试搜索节点函数
// console.log("8在二叉树中",binarySearchTree.search(8));
// console.log("100在二叉树中",binarySearchTree.search(100));
// // 测试节点删除
// console.log("删除节点3");
// binarySearchTree.remove(3);
// binarySearchTree.inOrderTraverse(printNode);