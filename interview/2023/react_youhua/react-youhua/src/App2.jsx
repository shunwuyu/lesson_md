import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export function ChildNonTheme() {
  console.log("不关心皮肤的子组件渲染了");
  return <div>我不关心皮肤，皮肤改变的时候别让我重新渲染！</div>;
}

const ChildNonThemeMemo = React.memo(ChildNonTheme);

export function ChildWithTheme() {
  const theme = useContext(ThemeContext);
  return <div>我是有皮肤的哦~ {theme}</div>;
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const onChangeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={onChangeTheme}>改变皮肤</button>
      <ChildWithTheme />
      <ChildNonThemeMemo />
      <ChildNonThemeMemo />
      <ChildNonThemeMemo />
      <ChildNonThemeMemo />
      <ChildNonThemeMemo />
      <ChildNonThemeMemo />
      <ChildNonTheme />
    </ThemeContext.Provider>
  );
}

