var MinStack = function() {
    this.stack = []; // 栈
    this.minStack = []; // 辅助栈

};
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!this.minStack.length || x < this.getMin()) {
        this.minStack.push(x);
    }
    this.stack.push(x);
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.stack.length) {
        throw new Error('stack is empty')
    }
    let x = this.stack.pop();
    if (x === this.getMin()) {
        this.minStack.pop();
    }
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (!this.minStack.length) {
        throw new Error('stack is empty');
    }
    return this.minStack[this.minStack.length - 1];
};

var obj = new MinStack()
obj.push(4);
obj.push(9);
obj.push(7);
obj.push(3);
obj.push(8);
obj.push(5);
console.log(obj.getMin());
obj.pop()
obj.pop()
obj.pop()
console.log(obj.getMin());