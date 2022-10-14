import { useState, useEffect } from 'react'

export const YzmButton = () => {
    const [btnText, setBtnText] = useState('获取验证码')
    const [disabled, setDisabled] = useState(false)
    let interval
    const getYzm = () => {
        setDisabled(true)
        let i = 60;
        interval = setInterval(() => {
            setBtnText(`${i}s`);
            i--
            if (i < 0) {
                clearInterval(interval);
                setBtnText('重新获取验证码')
                setDisabled(false)
            }
        },1000)
    }
    useEffect(() => {
        return () => {
            if (interval) {
                clearInterval(interval);
                console.log('/////')
            }
        }
    }, [])
    return (
        <button onClick={getYzm} disabled={disabled}>{btnText}</button>
    )
}