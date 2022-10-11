let biu = function () {
  console.log('biu biu biu',new Date().Format('HH:mm:ss'))
}

let boom = function () {
  console.log('boom boom boom',new Date().Format('HH:mm:ss'))
}


setInterval(debounce(biu,500),1000)
setInterval(debounce(boom,2000),1000)
