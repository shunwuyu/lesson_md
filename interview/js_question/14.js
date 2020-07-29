// var arr = [1]; arr[10000] = 1
// function a(){
//   console.time()
//   for(var i = 0;i<arr.length;i++)console.log(1)
//   console.timeEnd()
// }

// a();


// // 对建值的遍历
// function b(){
//   console.time()
//   arr.forEach(item=>{console.log(2)})
//   console.timeEnd()
// }
// b();


var arr = [1,2,3,4]
arr.forEach((item,index)=>{
    Object.defineProperty(arr,index,{
        set:function(val){
            console.log('set')
            item = val
        },
        get:function(val){
            console.log('get')
            return item
        }
    })
})
arr[1]; // get  2
arr[1] = 1; 
arr[5] = 2;

