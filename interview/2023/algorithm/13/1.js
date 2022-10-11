const MyQueue = function () {
    // 初始化两个栈
    this.stack1 = [];
    this.stack2 = [];
};
/**
* Push element x to the back of queue.
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
    // 直接调度数组的 push 方法
    this.stack1.push(x);
};
/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function () {
    // 假如 stack2 为空，需要将 stack1 的元素转移进来
    if (this.stack2.length <= 0) {
        // 当 stack1 不为空时，出栈
        while (this.stack1.length !== 0) {
        // 将 stack1 出栈的元素推入 stack2
        this.stack2.push(this.stack1.pop());
        }
    }
    // 为了达到逆序的目的，我们只从 stack2 里出栈元素
    return this.stack2.pop();
};

/**
* Get the front element.
* @return {number}
* 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
*/
MyQueue.prototype.peek = function () {
    if (this.stack2.length <= 0) {
      // 当 stack1 不为空时，出栈
      while (this.stack1.length != 0) {
        // 将 stack1 出栈的元素推入 stack2
        this.stack2.push(this.stack1.pop());
      }
    }
    // 缓存 stack2 的长度
    const stack2Len = this.stack2.length;
    return stack2Len && this.stack2[stack2Len - 1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
    // 若 stack1 和 stack2 均为空，那么队列空
    return !this.stack1.length && !this.stack2.length;
  };