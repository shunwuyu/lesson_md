var numbers = [65, 44, 12, 4];

function getSum(total, num) {
  console.log(total, num, '--------');
  return total + num;
}

console.log(numbers.reduce(getSum));