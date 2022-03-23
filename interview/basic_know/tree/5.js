// https://juejin.cn/post/6861376131615227912
    //                 root
    //      c1                  c2
    // c11       c12        c21    c22
const tree = {
	name: 'root',
	children: [
		{
			name: 'c1',
			children: [
				{
						name: 'c11',
					children: []		
					},
					{
						name: 'c12',
					children: []		
				}
			]
		},
		{
			name: 'c2',
			children: [
				{
						name: 'c21',
					children: []		
					},
					{
						name: 'c22',
					children: []		
				}
			]
		}
	]
}

// ['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']
// 栈优化
function dfs(root) {
    let stack = [],
        result = [];
    if(!root) return [];
    stack.push(root) //
    // console.log(stack, '??')
    while(stack.length) {
        let node = stack.pop()
        if(node == null ) continue
        result.push(node.name)
        for(let i = node.children.length-1; i >= 0; i--) {
            // 这里就是面试的重点,应该从后面的节点压入栈中
            stack.push(node.children[i])
        }
    }
    return result
}

console.log(dfs(tree));