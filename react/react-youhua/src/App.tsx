import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。
const ThemeContext = React.createContext({});

export function ChildWithTheme() {
  const theme = useContext(ThemeContext);
  return <div>我是有皮肤的哦~ {theme}</div>;
}

export function ChildNonTheme() {
  console.log("不关心皮肤的子组件渲染了");
  return <div>我不关心皮肤，皮肤改变的时候别让我重新渲染！</div>;
}



//  至上而下递归更新 <ChildNonTheme/>  babel React.createElement(ChildNonTheme)
// props 是immutable的， 每次调用函数式组件的时候， 都会生成一份新的props引用
// const childNonThemeElement = {
//   type: 'ChildNonTheme',
//   props: {} // <- 这个引用更新了
// }

function App() {
  const [theme, setTheme] = useState("light");
  const onChangeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <button onClick={onChangeTheme}>改变皮肤</button>
        <ChildWithTheme />
        <ChildNonTheme />
        <ChildNonTheme />
        <ChildNonTheme />
        <ChildNonTheme />
        <ChildNonTheme />
        <ChildNonTheme />
        <ChildNonTheme />
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
