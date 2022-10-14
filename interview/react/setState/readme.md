[source](https://zhuanlan.zhihu.com/p/50335551)
## setState
1. 运行项目
  this.state.count = 1

2. setState 方法其实是 “异步” 
  无法直接获得最新的state的， React对state的所有改变进行合并处理后， 计算新的虚拟DOM , 真实DOM
   
3. 怎么获得修改后的state呢？
  回调

4. React 其实会维护着一个 state 的更新队列
  每次调用 setState 都会先把当前修改的 state 推进这个队列，在最后，React 会对这个队列进行合并处理，然后去执行回调。根据最终的合并结果再去走下面的流程

5. setState为什么要设计成异步的
  - 保证内部的一致性：state是同步更新，props也不是
  - 将state的更新延缓到最后批量合并再去渲染对于应用的性能优化是有极大好处的，如果每次的状态改变都去重新渲染真实dom，那么它将带来巨大的性能消耗。

6. setTimeout中调用以及原生事件中调用的话，是可以立马获取到最新的state的。根本原因在于，setState并不是真正意义上的异步操作，它只是模拟了异步的行为。React中会去维护一个标识（isBatchingUpdates），判断是直接更新还是先暂存state进队列。setTimeout以及原生事件都会直接去更新state，因此可以立即得到最新state。而合成事件和React生命周期函数中，是受React控制的，其会将isBatchingUpdates设置为 true，从而走的是类似异步的那一套。

## 纯函数
  [source](https://juejin.cn/post/6844903856850092046)
  始终接受一个或多个参数并计算参数并返回数据或函数的函数
  它没有副作用，例如设置全局状态，更改应用程序状态，它总是将参数视为不可变数据。

  相同的输入，永远会得到相同的输出
  可变数据类型和不可变数据类型。

  (previousState, action) => newState

  ```
    case 'TOGGLE_TODO':
      return {
        ...state,
        completed: !state.completed
      }

    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        completed: !state.completed
      })
  ```

