const f1 = function() {
    console.log('f1');
}
const f2 = function() {
    console.log('f2');
}
const fp1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('f1');
        resolve()
    }, 1000)
}) 

fp1
    .then(() => {
        f2()
    })