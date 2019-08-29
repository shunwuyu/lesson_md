var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let total = 0,
    remain = 0,
    start = 0;
  
  for (let i = 0; i < n; i++) {
    total += gas[i];
    total -= cost[i];

    remain += gas[i];
    remain -= cost[i];

    if (remain < 0) {
      remain = 0;
      start = i + 1;
    }
  }
  return total >= 0? start : -1;
}
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));