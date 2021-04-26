/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
  g = g.sort((a,b) => {return a-b})
  s = s.sort((a,b) => {return a-b})
  // console.log(g, s)
  let i = 0, res = 0
  for(let j = 0,len = s.length; j < len; j++){
      if(s[j] >= g[i]){
          res += 1
          i++
          if(i === g.length){
              break
          }
      }
  }
  return res
};

console.log(findContentChildren([1,2,3], [1,1]));