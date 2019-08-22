const gas = [1,2,3,4,5];
const cost = [3,4,5,1,2];
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function getIndex(index, n) {
  if (index > n - 1) {
    return index - n;
  }
  return index;
}

var canCompleteCircuit = function(gas, cost) {
    let remain = 0;
    const n = gas.length;
    for (let i = 0; i < gas.length; i++) {
      remain += gas[i];
      remain -= cost[i];
      let count = 0;
      while (remain >= 0) {
        count++;
        if (count === n) return i;
        remain += gas[getIndex(i + count, n)];
        remain -= cost[getIndex(i + count, n)];
      }
      remain = 0;
    }
    return -1;
};

console.log(canCompleteCircuit(gas, cost));