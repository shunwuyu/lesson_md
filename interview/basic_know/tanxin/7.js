const nums = [32, 94, 128, 1286, 6, 71];
function getBigNum(nums) {
nums.sort((a, b) => {
    const ab = `${a}${b}`;
    const ba = `${b}${a}`;
    
    if(ab > ba) {
    return -1;   // ab大，a放前面
    } else if (ab < ba) {
    return 1;  
    }
    
    return 0;
});

return nums;
}

const res = getBigNum(nums);
console.log(res);    // [94, 71, 6, 32, 1286, 128]
