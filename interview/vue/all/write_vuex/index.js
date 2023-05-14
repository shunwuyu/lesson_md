class Store {
    constructor(options) {
        this.state = reactive(options.state)
        this.options = options
    }
    commit(type, payload) {
        this.options.mutations[type].call(this, this.state, payload)
    }
}

作者：bb_xiaxia1998
链接：https://juejin.cn/post/7204844328111374391
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。