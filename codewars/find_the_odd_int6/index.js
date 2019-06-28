function findOdd(A) {
  let count = 0;
  // console.log(A);
  do {
    let i = A.splice(count, 1, 'p')[0];
    // console.log(i);
    // console.log(A);
    if (i !== 'p') { //还是新的
      let result = [i];
      A.forEach(function(e, index) {
        // console.log(e, index, '-----');
        if (e === i) { 
          i === result[0]?result.pop():result.push(i);//奇偶 用数组
          A.splice(index, 1, 'p');
        }
      });
      if (result.length > 0) {
        return result[0];
      }
    }
    // if (i !== 'p') {
    //   let result = [i];
    //   A.forEach()
    // }
    count++;
  } while (A.length > count)
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));