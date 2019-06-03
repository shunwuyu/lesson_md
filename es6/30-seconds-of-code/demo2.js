// Returns the average of an array, after mapping each element to a value using the provided function.
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
console.log(average(...[1, 2, 3,4]));