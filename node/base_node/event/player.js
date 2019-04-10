class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    killed(target, number) {
        if (target !== 'zombie') return
        if (number < 10) {
            this.score += 10 * number
        } else if (number < 20){
            this.score += 8 * number
        } else if (number < 30) {
            this.score += 5 * number
        }
        console.log(`${this.name} 成功击杀 ${number} 个 ${target}, 总得分 ${this.score}`)
    }
}

let player = new Player('Nil');
player.killed('zombie', 5)
player.killed('zombie', 12)
player.killed('zombie', 22)
