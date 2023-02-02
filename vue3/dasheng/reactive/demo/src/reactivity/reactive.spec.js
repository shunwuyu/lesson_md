import { effect } from '../effect'
import { reactive } from '../reactive'

describe('测试响应式', () => {
    test('reactive基本使用', () => {
        const ret = reacitve({num: 0})
        let val
        effect(() => {
            val = ret.num
        })
        expect(val).toBe(0)
        ret.num++
        expect(val).toBe(1)
        ret.num = 10
        expect(val).toBe(10)
    })
})