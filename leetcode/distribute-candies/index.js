var distributeCandies = function(candies) {
  const count = new Set(candies);
  return Math.min(count.size, candies.length >> 1)
}
console.log(distributeCandies([1,1,2,2,3,3]))
console.log(distributeCandies([1,1,2,3]))