- Hooks（钩子）逐渐取代class组件
    1. useState设置变量
    2. useEffect副作用
    3. useRef来获取元素的所有属性
    4. useMemo（值） useCallback(函数) 来做性能优化 
    5. useContext useReducer 数据管理
    6. 自定义Hooks 来创造出你所想要的Hooks

- Hooks的由来是什么
    react-hooks是React16.8以后新增的钩子API， 
    目的是增加代码的可复用性、逻辑性，最主要的是解决了函数式组件无状态的问题
    既保留了函数式的简单，又解决了没有数据管理状态的缺陷
- 那什么是自定义hooks 呢？
    自定义hooks是在react-hooks基础上的一个扩展，可以根据业务、需求去制定相应的hooks,将常用的逻辑进行封装，从而具备复用性
- 如何设计一个自定义Hooks
    hooks本质上是一个函数，而这个函数主要就是逻辑复用，我们首先要知道一件事，hooks的驱动条件是什么
    其实就是props的修改，useState、useReducer的使用是无状态组件更新的条件，从而驱动自定义hooks
    - 通用模式
        自定义hooks的名称是以use开头
        const [ xxx, ...] = useXXX(参数一，参数二...)
    ，一个好用的自定义hooks,一定要配合useMemo、useCallback等 Api 一起使用。


- useMemo 和 useCallback 是怎么做优化的
    当一个父组件中调用了一个子组件的时候，父组件的 state 发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。
    简单的理解下，当一个页面内容非常复杂，模块非常多的时候，函数式组件会从头更新到尾，只要一处改变，所有的模块都会进行刷新，这种情况显然是没有必要的。
    我们理想的状态是各个模块只进行自己的更新，不要相互去影响，那么此时用useMemo是最佳的解决方案。
    只要父组件的状态更新，无论有没有对自组件进行操作，子组件都会进行更新，useMemo就是为了防止这点而出现的
    在讲 useMemo 之前，我们先说说memo,memo的作用是会对传入的props进行一次对比，然后根据第二个函数返回值来进一步判断哪些props需要更新。

    useMemo与memo的理念上差不多，都是判断是否满足当前的限定条件来决定是否执行callback函数，而useMemo的第二个参数是一个数组，通过这个数组来判定是否更新回掉函数

    - 可以减少不必要的循环和不必要的渲染
    - 可以减少子组件的渲染次数
    - 通过特地的依赖进行更新，可以避免很多不必要的开销，

    - useCallback
        useCallback与useMemo极其类似,可以说是一模一样，唯一不同的是useMemo返回的是函数运行的结果，而useCallback返回的是函数
        这个函数是父组件传递子组件的一个函数，防止做无关的刷新，其次，这个组件必须配合memo,否则不但不会提升性能，还有可能降低性能
- useRef的高级用法是什么
    缓存数据
    但我们控制变量的值用useState 有可能会导致拿到的是旧值，并且如果他们更新会带来整个组件重新执行，这种情况下，我们使用useRef将会是一个非常不错的选择
    useCreation ：是 useMemo 或 useRef的替代品
    - useMemo的值不一定是最新的值 但useCreation可以保证拿到的值一定是最新的值
    - 对于复杂常量的创建，useRef容易出现潜在的的性能隐患，但useCreation可以避免

- componentDidMount  componentWillUnmount

- 一个好的自定义Hooks该如何设计
    
- 如何做一个不需要useState就可以直接修改属性并刷新视图的自定义Hooks
- 如何做一个可以监听任何事件的自定义Hooks

