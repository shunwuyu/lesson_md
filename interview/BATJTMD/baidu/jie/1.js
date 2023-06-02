function chunkArray(arr, size) {
    const chunkedArr = [];
    let index = 0;
   
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, index + size));
      index += size;
    }
   
    return chunkedArr;
  }
   
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkedArray = chunkArray(myArray, 3);
  console.log(chunkedArray);