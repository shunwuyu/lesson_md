//                 1
//       2                  3
//   4       5         6         7
var TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: {
          val: 4,
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
        },
        right: {
            val: 7
        }
    }
};

var inOrderRecur = function (root) {
    var list = [];
    var inOrder = function(root){
        if (root === undefined) {
            return root;
        }
        inOrder(root.left);
        list.push(root.val);
        inOrder(root.right);
    }
    inOrder(root)
    return list;
}

var inOrderUnRecur = function(root){
    var stack = [];
    var list = [];
    var head = root;
    while(stack.length !== 0 || head !== undefined){
        while(head !== undefined){
            stack.push(head);
            head = head.left;
        }
        // console.log(stack, '--------------');

        if(stack.length !== 0){
            head = stack.pop();
            console.log(head.val, '----------');
            list.push(head.val);
            head = head.right;
        }
    }
    return list;
};

var listUnRecur = inOrderUnRecur(TreeNode);
console.log('非递归中序遍历',listUnRecur);

var preOrderUnRecur = function(root){
    var stack = [];
    var list = [];
    var head = root;
    while(stack.length !== 0 || head !== undefined){
        while(head !== undefined){
            list.push(head.val);
            stack.push(head);
            head = head.left;
        }
        // console.log(stack, '--------------');

        if(stack.length !== 0){
            head = stack.pop();
            head = head.right;
        }
    }
    return list;
};

var listUnRecur2 = preOrderUnRecur(TreeNode);
console.log('非递归先序遍历',listUnRecur2);