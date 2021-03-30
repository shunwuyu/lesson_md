// type FunctionProps = {
//   /** 任意的函数类型 ❌ 不推荐 不能规定参数以及返回值类型 */
//   onSomething: Function;
//   /** 没有参数的函数 不需要返回值 😁 常用 */
//   onClick: () => void;
//   /** 带函数的参数 😁 非常常用 */
//   onChange: (id: number) => void;
//   /** 另一种函数语法 参数是 React 的按钮事件 😁 非常常用 */
//   onClick(event: React.MouseEvent<HTMLButtonElement>): void;
// }