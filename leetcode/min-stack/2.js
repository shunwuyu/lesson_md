// 不成立
var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_VALUE;
}

MinStack.prototype.push = function(x) {
  const min = this.min;
  if (x < min) {
    this.min = x;
  }
  return this.stack.push(x);
}

MinStack.prototype.pop = function() {
  const item = this.stack.pop();
  // 如果移除的是最小值?
  return item;
}

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
  return this.min
}

MinStack.prototype.toString = function() {
  return this.stack.join(' ');
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
console.log(minStack.toString());