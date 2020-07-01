function createPhoneNumber(numbers) {
  var n = numbers;
  return (
      '(' +
      n[0] +
      n[1] +
      n[2] +
      ') ' +
      n[3] +
      n[4] +
      n[5] +
      '-' +
      n[6] +
      n[7] +
      n[8] +
      n[9]
  );
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));