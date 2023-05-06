class EventEmitter {
    constructor() {
      // 初始化事件对象，用于存储事件名和事件处理函数
      this.events = {}
    }
  
    // 订阅事件
    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = []
      }
      this.events[event].push(callback)
    }
  
    // 发布事件
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach(callback => {
          callback.call(this, ...args)
        })
      }
    }
  
    // 取消订阅
    off(event, callback) {
      if (!this.events[event]) {
        return
      }
      const i = this.events[event].findIndex(c => c === callback)
      if (i >= 0) {
        this.events[event].splice(i, 1)
      }
    }
  }
  
  // 使用示例
  const emitter = new EventEmitter()
  
  // 订阅事件
  emitter.on('sayHello', function (params) {
    console.log(params)
  })
  
  // 发布事件
  emitter.emit('sayHello', 'Hello World!')
  
  // 取消订阅事件
  emitter.off('sayHello', function (params) {
    console.log(params)
  })

  emitter.emit('sayHello', 'Hello World!')