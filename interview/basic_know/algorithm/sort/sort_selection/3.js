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
  
  function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i
      for (let j = i; j < array.length; j++) {
        if (array[minIndex] > array[j]) {
          minIndex = j
        }
      }
      if (minIndex !== i) {
        utils.swap(array, i, minIndex)
      }
    }
    return array
  }
  
  const array = selectionSort(utils.randomArray())
  console.log(array)