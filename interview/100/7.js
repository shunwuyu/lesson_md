// 给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。否则,返回false。例如，数组[3,5,1,4]和 sum = 9，函数应该返回true，因为4 + 5 = 9。
const findSum = (arr, val) => {
  let searchValues = new Set();
  searchValues.add(val - arr[0]);
  for (let i = 1, length = arr.length; i < length; i++) {
    let searchVal = val - arr[i];
    if (searchValues.has(arr[i])) {
      return true;
    } else {
      searchValues.add(searchVal);
    }
  };
  return false;
};

// 优秀
const findSum = (arr, sum) =>
  arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));

  // O(N) O(N2)