function canEatAllBananas(piles, H, mid) {
  // 数组 H mid 二分点
  let h = 0;
  for(let pile of piles) {
     h += Math.ceil(pile / mid); // 向上取整
  }

  return h <= H; //向
}
/**
* @param {number[]} piles
* @param {number} H
* @return {number}
*/
var minEatingSpeed = function(piles, H) {
 let lo = 1,
 hi = Math.max(...piles); 
// console.log(hi);
 while(lo <= hi) {
    // let mid = ++lo;
     let mid = lo + ((hi - lo) >> 1);
    
    // let mid = ;
     console.log(mid, '---------');
     if (canEatAllBananas(piles, H, mid)) {
         hi = mid - 1;
     } else {
         lo = mid + 1;
     }
 }

 return lo; //  不能选择hi
};

// console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 6));