const nums1 = [1,2,3],
nums2 = [2,5,6];
const joinArr = [...nums1,...nums2].sort((a,b)=>a-b)
console.log(joinArr)