const EventEmitter = require('events')

class Player extends EventEmitter {
    constructor (name) {
        super()
        this.name = name
        this.score = 0
    }
}

let player = new Player('Nil')

player.on('zombie', function (number) {
    if (number < 10) {
      this.score += 10 * number
    } else if (number < 20) {
      this.score += 8 * number
    } else if (number < 30) {
      this.score += 5 * number
    }
  
    console.log(`${this.name} 成功击杀 ${number} 个 zombie，总得分 ${this.score}`)
  })

player.emit('zombie', 5)
player.emit('zombie', 12)
player.emit('zombie', 22)