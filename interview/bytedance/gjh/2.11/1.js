let arr = [[2,6], [1,3],[8,10],[15,18]]

function merge(intervals) {
  if (!intervals || !intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]); 
  // console.log(intervals, '--------');
  let result = [intervals[0]]
  console.log(result, '--------');
  for (let i = 1; i < intervals.length; i++) { // 从第二个开始比较
    let resultLast = result.length - 1
    console.log(resultLast, '????')
    if (result[resultLast][1] > intervals[i][0]) { // 判断结尾是不是大于开始
      result[resultLast][1] = Math.max(result[resultLast][1], intervals[i][1]) // 区间重复就进行合并了
    } else {
      result.push(intervals[i]) // 区间没有重复
    }
  }
  return result;
}

console.log(merge(arr))