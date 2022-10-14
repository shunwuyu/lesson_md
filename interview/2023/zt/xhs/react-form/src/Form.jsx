import React from 'react'
import Input from './Input'

export default function Form(props) {
    const { value, onChange } = props
    const { test1, test2} = value
    const onInputChange = (name, val) => {
        // console.log(name, value, '-----------------');
        value[name] = val;
        onChange(value)
    }
    return (
        <form>
            <Input name="test1" value={test1} onInputChange={onInputChange}/>
            <Input name="test2" value={test2} onInputChange={onInputChange}/>        
        </form>
    )
}
