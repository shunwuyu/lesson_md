const callbacks = []

let pending = false
const flushCallbacks = () => {
    pending = false
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
        copies[i] && copies[i]()
    }
  }
  
const nextTick = (callback) => {
    // console.log(callback)
    callbacks.push(callback)
    // console.log(callbacks);
    if (!pending) {
      pending = true
      Promise.resolve().then(flushCallbacks)
    }
}

export default nextTick;