let array = [1, 3, 5, 2, 4]
let i = 3
let target = array[3]
while(i > 0 && array[i-1] > target) {
  array[i] = array[i-1]
  i--
}
array[i] = target
console.log(array) // [ 1, 2, 3, 5, 4 ]