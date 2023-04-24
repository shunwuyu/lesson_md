const root = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3
        }
    }
}
// const root = {
//     val: "A",
//     left: {
//       val: "B",
//       left: {
//         val: "D"
//       },
//       right: {
//         val: "E"
//       }
//     },
//     right: {
//       val: "C",
//       right: {
//         val: "F"
//       }
//     }
//   };
const preorderTraversal = function(root) {
    const res = []
    if (!root) {
        return res
    }
    const stack = []
    stack.push(root)
    while(stack.length) {
        const cur = stack.pop()
        res.push(cur.val)
        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return res
}

console.log(preorderTraversal(root))