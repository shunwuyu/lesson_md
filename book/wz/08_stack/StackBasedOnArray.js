// 基于数组实现的顺序栈
class ArrayStack {
    constructor(n) {
    // 初始化数组，申请一个大小为n的数组空间
        this.items = [];
        this.n = n;  // 容量
        this.count = 0; // 空
    }

    // 入栈操作
    push(item) {
        // 需要考虑什么？ 空间不够
        // 数组空间不够了，直接返回false，入栈失败。
        if (count == n) return false;
        this.items[count] = item; 
        this.count++;
        return true;
    }   
    // 出栈操作
    pop() {
        // 栈为空，则直接返回null 
        if (count == 0) return null;
        let tmp = this.items[count-1];
        this.count--;
        return tmp
    }
}

const newStack = new ArrayStack()
newStack.push(1)
newStack.push(2)
newStack.push(3)
