// 节流防抖
// 防抖动是将多次执行变为最后一次执行，
// 节流是将多次执行变成每隔一段时间执行
// 节流
function throttle(fn, timeout) { // 节流
    let timer = null
    return function (...arg) {
        if(timer) return
        timer = setTimeout(() => {
            fn.apply(this, arg)
            timer = null
        }, timeout)
    }
}
// 防抖
function debounce(fn, timeout){ // 防抖
    let timer = null
    return function(...arg){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, timeout)
    }
}
