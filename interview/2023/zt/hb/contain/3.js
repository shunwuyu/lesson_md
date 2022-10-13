var containsDuplicate = function(nums) {
    const map = new  Map()
    for(let i of nums) {
        if(map.has(i)){
            return true
        } else {
            map.set(i,1)
        }
    }
    return false
   };