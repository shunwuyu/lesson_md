var singleNumber = function(nums) {
    let map = new Map();
    nums.forEach(item =>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    })
    for(let [key, val] of map.entries()){
        if(val === 1) return key;
    }
}
console.log(singleNumber([4,1,2,1,2]))