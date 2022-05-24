import React from "react";

export const MyChildComponent = () => {
React.useEffect(() => {
        console.log('Component just mounted on the DOM')
        return () => console.log("unmont on the DOM");
}, [])
  return <h4>Hello from Child Component</h4>;
};

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child Component Visibility
      </button>
    </>
  );
};