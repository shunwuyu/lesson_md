// 方括号+元素内容
// const arr = [1, 2, 3, 4];
// 并不知道它内部元素的情况 怎么办？
// const arr = new Array()  // 推荐， 构造函数  []
// 咱们使用构造函数，可不是为了创建空数组这么无聊 为了啥？
// “创造指定长度的空数组”这样的需求
// const arr = new Array(7);
// console.log(arr); //[ <7 empty items> ]
//  结果是？ [empty x 7]
// 创建一个长度确定、同时每一个元素的值也都确定的数组, 
// 怎么办？ js没有类型约束
// const arr = (new Array(7)).fill(1)
// console.log(arr);
// 数组的访问和遍历
// arr[0]  // 中括号中指定其索引即可
// 遍历数组 访问到数组中的每个元素, 哪三个方法
// const len = arr.length // 为什么要这么做？ 优化
// for(let i=0;i<len;i++) {
//     // 输出数组的元素值，输出当前索引
//     console.log(arr[i], i)
// }
// 数组每个元素的值及其对应索引
// arr.forEach((item, index)=> {
//     // 输出数组的元素值，输出当前索引
//     console.log(item, index)
// })
// map 方法
// 当我们需要对数组内容做批量修改、同时修改的逻辑又高度一致时，就可以调用 map 来达到我们的目的
// const newArr = arr.map((item, index)=> {
//     // 输出数组的元素值，输出当前索引
//     console.log(item, index)
//     // 在当前元素值的基础上加1
//     return item+1
// })
// 这三个， 优先那个呢？
// 如果没有特殊的需要，那么统一使用 for 循环来实现遍历
// 从性能上看，for 循环遍历起来是最快的。
// 更符合机器运算
// 二维数组别名叫什么？ 矩阵
// ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/8/170b9bedc6a882c1~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)
// 每一行中的每一列，则代表一个确切的“坑
// 相对于一维数组一条“线”一般的布局，二维数组更像是一个“面”
// 在数学中， 叫什么？  矩阵  长方阵列排列的复数或实数集合
// 二维数组的别名就叫“矩阵”
// 在算法题目中，见到“矩阵”时 立马想到二维数组
// 7个坑都被乖乖地填上了数组元素
// const arr =(new Array(7)).fill([])
// // console.log(arr);
// arr[0][0] = 1;
// console.log(arr);
// 你会发现一整列的元素都被设为了 1：
// 为什么？ 
// 这就要从 fill 的工作机制讲起了。各位要清楚，当你给 fill 传递一个入参时，
// 如果这个入参的类型是引用类型，那么 fill 
// 在填充坑位时填充的其实就是入参的引用。

// 初始化一个二维数组
// const len = arr.length
// for(let i=0;i<len;i++) {
//     // 将数组的每一个坑位初始化为数组
// for 循环中，每一次迭代我们都通过“[]”来创建一个新的数组，这样便不会有引用指向问题带来的尴尬。
//     arr[i] = []
// }
// 二维数组的访问
// 访问二维数组和访问一维数组差别不大，
// 区别在于我们现在需要的是两层循环
// const outerLen = arr.length
// for(let i=0;i<outerLen;i++) {
//     // 缓存内部数组的长度
//     const innerLen = arr[i].length
//     for(let j=0;j<innerLen;j++) {
//         // 输出数组的值，输出数组的索引
//         console.log(arr[i][j],i,j)
//     }
// }
