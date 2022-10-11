import { useState } from 'react' 
import Child from './Child'

function Father() {
    const [state, setState] = useState("state");
    return (
      <div>
        <Child state={state} setState={setState}/>
      </div>
    );
}
  
export default Father