package main

import ("fmt")

type Node struct {
	value int
	left *Node
	right *Node
}

// 递归
func (node *Node)FindNode(n *Node, x int) *Node {
	if n == nil {
		return nil
	}else if n.value == x {
		return n
	}else {
		p := node.FindNode(n.left, x)
		if p != nil {
			return p
		}
		return node.FindNode(n.right, x)
	}
}

func (node *Node)GetTreeHeigh(n *Node) int {
	if n == nil {
		return 0
	}else {
		lHeigh := node.GetTreeHeigh(n.left)
		rHeigh := node.GetTreeHeigh(n.right)
		if lHeigh > rHeigh {
			return lHeigh + 1
		} else {
			return rHeigh + 1
		}
	}
}

func (node *Node)PreOrder(n *Node) {
	if n != nil {
		fmt.Printf("%d ", n.value)
		node.PreOrder(n.left)
		node.PreOrder(n.right)
	}
}

func (node *Node)InOrder(n *Node) {
	if n != nil {
		node.InOrder(n.left)
		fmt.Printf("%d ", n.value)
		node.InOrder(n.right)
	}
}

func (node *Node)PostOrder(n *Node) {
	if n != nil {
		node.PostOrder(n.left)
		node.PostOrder(n.right)
		fmt.Printf("%d ", n.value)
	}
}

func CreateNode(value int) *Node{
	return &Node{value, nil, nil}
}


func (node *Node)GetLeafNode(n *Node) {
	if n != nil {
		if n.left == nil && n.right == nil {
			fmt.Printf("%d ", n.value)
		}
		node.GetLeafNode(n.left)
		node.GetLeafNode(n.right)
	}
}

		// 	   5
	  // 2          4
		// 	 7    8     9
		//  6	 
func main() {
	root := CreateNode(5)
	root.left = CreateNode(2)
	root.right = CreateNode(4)
	root.left.right = CreateNode(7)
	root.left.right.left = CreateNode(6)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)

	fmt.Printf("%d\n", root.FindNode(root, 4).value)
	fmt.Printf("%d\n", root.GetTreeHeigh(root))

	root.PreOrder(root)
	fmt.Printf("\n")
	root.InOrder(root)
	fmt.Printf("\n")
	root.PostOrder(root)
	fmt.Printf("\n")

	root.GetLeafNode(root)
}