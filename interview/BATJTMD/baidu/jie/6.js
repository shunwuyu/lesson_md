console.log('1');
function promiseFn() {
  return new Promise((resolve, reject) => {
​    setTimeout(()=> {
​      console.log('2');
​    })
​    resolve('3');
​    console.log('4')
  })
}

promiseFn().then(res => {
  console.log(res);
});