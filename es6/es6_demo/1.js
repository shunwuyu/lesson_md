const fn1 = () =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 300);
    });
  }
  const fn2 = () =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 600);
    });
  }
//   const fn = () =>{
//      fn1().then(res1 =>{
//         console.log(res1);// 1
//         fn2().then(res2 =>{
//           console.log(res2)
//         })
//      })
//   }
  

//   const fn = async () =>{
//     const res1 = await fn1();
//     const res2 = await fn2();
//     console.log(res1);// 1
//     console.log(res2);// 2
//   }

//   还能再怎么优化一下吗？
const fn = () =>{
    Promise.all([fn1(),fn2()]).then(res =>{
        console.log(res);// [1,2]
    }) 
 }
  