function deepFirstSearch(node) {
    var nodes = [];
    if (node != null) {
        var stack = []; // 栈！
        stack.push(node); // 入栈 
        while (stack.length != 0) {
        var item = stack.pop(); // 将最后一个元素出栈
        nodes.push(item); // 推到结果数组
        var children = item.children;
        for (var i = children.length - 1; i >= 0; i--)
            stack.push(children[i]); // 子元素入栈
        }
    }
    return nodes;
}