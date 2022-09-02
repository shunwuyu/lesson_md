import { useState } from 'react'
import Form from './Form'
function App() {
  const [value, setValue] = useState({
    test1: 'test1',
    test2: 'test2'
  });
  const onChange = (value) => {
    setValue[value];
    console.log(value, '-----------------------');
  }
  return (
    <div className="App">
      <Form value={value} onChange={onChange}/>
    </div>
  )
}

export default App
