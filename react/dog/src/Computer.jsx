import { useState } from 'react'

const Screen = (props) => {
    const {showContent} = props
    return (
        <div className='screen'>{showContent}</div>
    )
}

const Computer = () => {
    const [status, setStatus] = useState(false);
    const toggle = () => {
        setStatus(!status);
    }
    return (
        <div>
            <button onClick={toggle}>开关</button>
            <Screen showContent={status?'显示器亮了':'显示器关了'} />
        </div>
    )
}

export default Computer