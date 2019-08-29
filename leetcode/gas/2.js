function getIndex(index, n) {
  if (index > n - 1) {
    return index - n;
  }
  return index;
}

var canCompleteCircuit = function(gas, cost) {
  let remain = 0;
  const n = gas.length; // 总数
  for (let i = 0; i < gas.length;i++){
      remain += gas[i]; // 加油
      remain -= cost[i];// 花销
      let count = 0;
      while (remain >= 0){
          count++; //加
          if (count === n ) return i; //可以
          remain += gas[getIndex(i + count,n)]; //一直往后走
          remain -= cost[getIndex(i + count,n)];//一直往后走
      }
      remain = 0 //下一次
  }
  return -1;
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));

