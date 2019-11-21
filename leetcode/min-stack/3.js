var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_VALUE;
}

MinStack.prototype.push = function(x) {
  const min = this.min;
  console.log(min, '-----');
  // 更新最小值
  if (x < this.min) {
    this.min = x;
  }
  // console.log(this.min);
  // 真实值和min的差值
  // console.log(x - min, '----');
  // 当前值减少去小值
  return this.stack.push(x - min);
}

MinStack.prototype.pop = function() {
  const item = this.stack.pop()
  const min = this.min;
  
  if (item < 0) {
    // 上一个最小值 重新修改
    this.min = min - item; 
    return min;
  }
  return item + min;
}

MinStack.prototype.top = function() {
  const item = this.stack[this.stack.length - 1];
  const min = this.min;
  if (item < 0) {
    return min; // 最小值
  }
  return item + min;
}

MinStack.prototype.getMin = function() {
  return this.min;
}

const minStack = new MinStack();
minStack.push(-3);
// console.log(minStack.stack);
minStack.push(0);
// console.log(minStack.stack);
minStack.push(-2);
// console.log(minStack.pop());
console.log(minStack.stack);
// console.log(minStack.min);