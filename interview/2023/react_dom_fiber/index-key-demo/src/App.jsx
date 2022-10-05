let state = [];
let hookIndex = 0;


const useState = (initialState) => {
    state[hookIndex] = state[hookIndex] || initialState;
   
    // 修改状态的函数
    let curHookIndex = hookIndex;
    const setState = (value) => {
      state[curHookIndex] = value;
      // 重新渲染组件
      render();
    };
   
    // Tuple 类型
   
    const ret = [state[hookIndex], setState];
   
    hookIndex++;
    return ret;
  };



  const useEffect = (callback, deps) => {
    // 获取上一次的依赖
    const lastDeps = state[hookIndex];
   
    // 记录有没有依赖项
    let hasNoDeps = false;
    // 记录依赖项是否发生改变
    let hasDepsChanged = false;
    // 判断有没有依赖项
    if (!deps) {
      // 没有依赖项
      hasNoDeps = true;
    } else {
      // 前提：只要代码执行到这，说明是有依赖项的
      // 如果上一次的依赖项为空，说明是第一次执行 useEffect
      // 此时，不管 useEffect 的依赖项时什么，都必须要执行一次 回调函数
      if (!lastDeps) {
        hasDepsChanged = true;
      } else {
        // 有依赖项
        // 通过 some 方法的返回值来表示依赖项是否发生改变
        // 约定：返回 true 表示发生了变化；返回 false 表示没有发生变化
        hasDepsChanged = deps.some((item, index) => {
          return item !== lastDeps[index];
        });
      }
    }
   
    if (hasNoDeps || hasDepsChanged) {
      callback();
      // 将最新的依赖项保存到 state 变量中
      state[hookIndex] = deps;
    }
   
    hookIndex++;
  };
  

const App = () => {
    const [count, setCount] = useState(100);
    const [age, setAge] = useState(16);
   
    // +1
    const onIncrement = () => {
      setCount(count + 1);
    };
   
    const onAgeIncrement = () => {
      setAge(age + 1);
    };
   
    return (
      <div style={{ backgroundColor: 'pink', padding: 10 }}>
        <h1>计数器：{count}</h1>
        <button onClick={onIncrement}>+1</button>
   
        <hr />
        <p>年龄：{age}</p>
        <button onClick={onAgeIncrement}>年龄+1</button>
      </div>
    );
  };

  export default App