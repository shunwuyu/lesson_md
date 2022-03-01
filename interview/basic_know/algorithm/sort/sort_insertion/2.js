// 能插入成功一个，遍历n-1次（第一个元素本身就是有序序列了），
// 就可以全部插入
let array = [1, 3, 5, 2, 4]
for (let j = 1; j < array.length; j++) {
    let i = j
    let target = array[i]
    while(i > 0 && array[i-1] > target) {
      array[i] = array[i-1]
      i--
    }
    array[i] = target
  }
console.log(array);