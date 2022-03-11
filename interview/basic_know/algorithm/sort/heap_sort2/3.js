function buildHeap(items) {
  let heapSize = items.length
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(heapSize/2); i >= 1; --i) {    
      heapify(items, heapSize, i);  
  }
}
function heapify(items, heapSize, i) {
  // 自上而下式堆化
  while (true) {
      var maxIndex = i;
      // 从后往前，  
      if(2*i <= heapSize && items[i] > items[i*2] ) {
          maxIndex = i*2;
      }
      if(2*i+1 <= heapSize && items[maxIndex] > items[i*2+1] ) {
          maxIndex = i*2+1;
      }
      if (maxIndex === i) break;
      swap(items, i, maxIndex); // 交换 
      i = maxIndex; 
  }
}  
function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 因为 items[0] 不存储数据
// 所以：heapSize = items.length - 1
buildHeap(items, items.length - 1)
console.log(items)
// [empty, 1, 2, 3, 4, 5]