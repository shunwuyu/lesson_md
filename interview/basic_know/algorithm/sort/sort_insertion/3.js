const utils = {
    swap(array, a, b) {
      [array[a], array[b]] = [array[b], array[a]]
    },
    randomNum() {
      return Math.floor(Math.random() * 100)
    },
    randomArray() {
      return Array.from(Array(this.randomNum()), _ => this.randomNum())
    }
  }
  
  function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = i
      let target = array[j]
      while(j > 0 && array[j-1] > target) {
        array[j] = array[j-1]
        j--
      }
      array[j] = target
    }
    return array
  }
  let array = utils.randomArray()
  console.log(insertionSort(array))