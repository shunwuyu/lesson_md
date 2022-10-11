// import createStore from '../src/index';
const createStore = require('../src/createStore.js');

// console.log(a);
function stateChanger (state = {}, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state // 没有修改，返回原来的对象
  }
}
describe('createStore', () => {
  it('exposes the public API', () => {
    const store = createStore(stateChanger)
    const methods = Object.keys(store)

    expect(methods.length).toBe(3)
    expect(methods).toContain('subscribe')
    expect(methods).toContain('dispatch')
    expect(methods).toContain('getState')
  })
})