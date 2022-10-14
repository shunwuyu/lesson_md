import React, {useState} from 'react'

export default function Input(props) {
    const { name, value,  onInputChange } = props
    const [inpValue, setInpValue] = useState(value); 
    const onChange = (event) => {
        const newValue = event.target.value;
        setInpValue(newValue);
        onInputChange(name, newValue)
    }
  return (
    <div>
      <input type="text" value={inpValue} onChange={onChange}/>
    </div>
  )
}
