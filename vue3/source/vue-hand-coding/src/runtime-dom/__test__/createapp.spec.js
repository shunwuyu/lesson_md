import { createApp, h } from '../'

describe('创建应用', () => {
    test('createApp', () => {
      const Comp = {
        render() {
          return h('div', null, 'hi weiyouyi')
        },
      }
      const root = document.createElement('div')
      const vm = createApp(Comp)
      vm.mount(root)
      console.log(root.innerHTML, '????????????????')
      expect(root.innerHTML).toBe('<div>hi weiyouyi</div>')
    })
})