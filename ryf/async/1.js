function f2() {
    console.log('f2');
}
function f1(callback){
    
    setTimeout(function () {
        // f1的任务代码
        console.log('f1-------------执行完了')
        callback();
    }, 1000);
}
f1(f2)
console.log('main-----------')