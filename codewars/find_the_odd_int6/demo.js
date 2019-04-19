const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));