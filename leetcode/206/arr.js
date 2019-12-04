const arr = [1,2];
const tmp = arr[0];
arr[0] = arr[1];
arr[1] = tmp;
console.log(arr);

[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);
