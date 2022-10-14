let todos = [
    {
      id: 1,
      name: '待办1',
      done: false
    },
    {
      id: 2,
      name: '待办2',
      done: false
    },
    {
      id: 3,
      name: '待办3',
      done: false
    }
  ]
  
  type Url = '/api/todos' | '/api/toggle' | '/api/add'
    // 无法判定的类型就是nerver 
    //   因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。
    //  这里，我们使用了 类型变量，
    // 它是一种特殊的变量，只用于表示类型而不是值。
  const axios = <T>(url: Url, payload?: any): Promise<T> | never => {
    let data
    switch (url) {
      case '/api/todos': {
        data = todos.slice()
        break
      }
      case '/api/toggle': {
        const todo = todos.find(({ id }) => id === payload)
        if (todo) {
          todo.done = !todo.done
        }
        break
      }
      case '/api/add': {
        todos.push(payload)
        break
      }
      default: {
        throw new Error('Unknown api')
      }
    }
  
    return Promise.resolve(data as any)
  }
  
  export default axios