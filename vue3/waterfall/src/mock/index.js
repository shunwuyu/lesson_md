import Mock, { Random } from 'mockjs'

let maxNum = 400
let minNum = 100
Mock.mock(/\/goods/, 'get', () => {
    const data = []
    for (let i = 0; i < 20; i++) {
        let randomWidth = parseInt(Math.random()*(maxNum-minNum+1)+minNum);
        let item = {
            id: i,
            title: Random.ctitle(),
            pic: Random.image(`200x${randomWidth}`, '#FF6600'),
            height: randomWidth
        }
        data.push(item)
    }

    return data  
})