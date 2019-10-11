const lexicalOrder = (n) => {
  let arr = [];
  let num = 1;
  arr.push(1);
  for (let i = 1; i < n; i++) {
    if (num * 10 <= n) num *= 10 //每次都乘以10
    else {
      while (num % 10 === 9 || num == n ) num = Math.floor(num/10);
      num++
    }
    arr.push(num);
  }
  return arr;
}

console.log(lexicalOrder(118));