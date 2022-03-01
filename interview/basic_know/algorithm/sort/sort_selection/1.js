let array = [1, 2, 4, 5, 3]
let minIndex = 2
for (let i = 2; i < array.length; i++) {
  if (array[minIndex] > array[i]) {
    minIndex = i
  }
}
console.log(minIndex)

if (minIndex !== 2) {
    swap(array, 2, minIndex)
}
console.log(array) // [1, 2, 3, 5, 4]

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}
