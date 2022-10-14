import { useState } from 'react'
const App = () => {
  const [inputs, setInputs] = useState(Array(10).fill(''));
  const setInput = (i, v) => {
    setInputs(Object.assign([...inputs], { [i]: v }));
  };

  return inputs.map((v, i) => (
    <div key={i}> 
      <input value={v} onChange={e => setInput(i, e.target.value)} />
    </div>
  ));
}

export default App
