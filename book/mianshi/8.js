let a = {
    i: 1,
    // valueOf替换成toString效果是一样的
    // toString
    valueOf() {
        return this.i++
    }
}
  
if (a == 1 && a == 2 && a == 3) {
    console.log('前端胖头鱼') // 前端胖头鱼
}

