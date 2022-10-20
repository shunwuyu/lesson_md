import { useRef, useState } from 'react'
export default function App() {
    const eleRef = useRef(null);
    const [submitContent, setSubmitContent] = useState("");
  
    const handleSubmit = () => {
      // 通过ref获取输入框的值
      const content = eleRef.current?.value;
      setSubmitContent(content);
    };
  
    return (
      <div className="App">
        <input ref={eleRef} />
        <button type="primary" onClick={handleSubmit}>
          提交
        </button>
        <div>{submitContent ?? ""}</div>
      </div>
    );
  }