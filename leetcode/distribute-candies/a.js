var distributeCandies = function(candies) {
  let obj = {};
  let count =0;
  candies.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
      count++;
    }
  })
  return count >= (candies.length)/2 ? (candies.length)/2 : count;
}