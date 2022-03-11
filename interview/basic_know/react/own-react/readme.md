[source](https://qcsite.gatsbyjs.io/build-your-own-react/)

- Concurrent 是什么意思？
  并发

## Concurrent Mode
  1. 代码有什么性能问题？
    递归调用会导致一些问题
    一旦开始渲染，在我们将 react element 数渲染出来之前没法暂停
    如果这颗树很大，可能会对主线程进行阻塞。
  2. 哪些会被影响？
    如：用户输入，保证动画顺畅
  3. 如何做？
    CPU 轮询
  将整个任务分成一些小块，每当我们完成其中一块之后需要把控制权交给浏览器，
  让浏览器判断是否有更高优先级的任务需要完成
  4. requestIdleCallback 
    它使用自己编写的 scheduler package

    我们需要先设置渲染的第一个任务单元，然后开始循环。performUnitOfWork 函数不仅需要执行每一小块的任务单元，还需要返回下一个任务单元。

## Fibers
  - 现在的任务是什么？
    怎么把之前的一次性DOM树渲染， 可以分成多个任务unit , 并且便于返回下一个任务

  为了把所有任务单元组织起来我们需要一个数据结构：fiber 树
  每一个 element 都是一个 fiber， 每一个 fiber 都是一个任务单元。
  ```js
    Didact.render(
  <div>
    <h1>
      <p />
      <a />
    </h1>
    <h2 />
  </div>,
  container
)
  ```
  在 render 中，我们创建了 根fiber，并且将其设为 nextUnitOfWork 作为第一个任务单元，剩下的任务单元会通过 performUnitOfWork 函数完成并返回
  每个 fiber 节点完成下述三件事：
  1. 把 element 添加到 DOM 上
  2. 为该 fiber 节点的子节点新建 fiber
  3. 挑出下一个任务单元

  - 每个 fiber 都会指向它的第一个子节点、它的下一个兄弟节点 和 父节点 
    以h1为例子

  - 下一个任务节点的顺序是？
    1. 紧接着 div fiber 节点的是 h1 fiber 节点。
    


