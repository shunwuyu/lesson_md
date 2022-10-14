const set2 = new Set();
set2.add("f");
set2.add("g")
  .add("h")
  .add("i")
  .add("j")
  .add("k")
  .add("k");
for (let n of set2) {
  console.log(n);
}

const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqueNums = [...new Set(numbers)];
console.log(uniqueNums);