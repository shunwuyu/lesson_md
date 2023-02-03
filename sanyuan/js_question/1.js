let nums = [1, 2, 3];
// 在forEach中用return不会返回，函数会继续执行。
// nums.forEach((item, index) => {
//     console.log(item);
//     if (item == 2) {
//         return false
//     }
// })

// nums.forEach((item, index) => {
//     try {
//         console.log(item);
//         if (item == 2) {
//             throw new Error('出错了')
//         }
//     } catch(e) {
//         console.log('=====', e)
//     }
        
// })
// 官方推荐方法（替换方法）：用every和some替代forEach函数。
const ages = [32, 15, 19, 12];

const adultPresent = ages.some(age =>  {console.log(age); return age >= 18 });
console.log(adultPresent);