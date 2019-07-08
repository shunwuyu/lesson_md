import createStore from '../src/createStore';
// const a = require('../src/index');

// console.log(a);
function reducers (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state // 没有修改，返回原来的对象
  }
}
describe('createStore', () => {
  it('exposes the public API', () => {
    const store = createStore(reducers)
    const methods = Object.keys(store)

    expect(methods.length).toBe(3)
    expect(methods).toContain('subscribe')
    expect(methods).toContain('dispatch')
    expect(methods).toContain('getState')
  })
  it('passes the initial state', () => {
    const store = createStore(reducers)
    expect(store.getState()).toEqual(0)
  })
  it('dispatch', () => {
    const store = createStore(reducers);
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    expect(store.getState()).toEqual(2);
    store.dispatch({type: 'DECREMENT'});
    expect(store.getState()).toEqual(1);
  })
  it('subscribe', () => {
    const store = createStore(reducers);
    const listenerA = jest.fn()
    const listenerB = jest.fn()
    store.subscribe(listenerA)
    store.subscribe(listenerB)
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    expect(listenerA.mock.calls.length).toBe(2)
    expect(listenerB.mock.calls.length).toBe(2)
  })
})