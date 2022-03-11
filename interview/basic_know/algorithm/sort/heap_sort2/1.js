function insert(key) {
  items.push(key)
  // 获取存储位置
  let i = items.length-1 
  // 元素在 大顶堆 一直做
  while (i/2 > 0 && items[i] > items[i/2]) {  
      swap(items, i, i/2); // 交换 
      i = i/2; 
  }
}  
function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}
