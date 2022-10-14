import React, { useRef, useEffect } from 'react'
import { Wrapper } from 'styled-components'

export default function TabBar({data, type}) {
    const cls = type === "indicate" ? "indicate" : "highlight";
    const ref = useRef()
    useEffect(() => {
        console.log(typeof ref)
    }, [])
    console.log(data, '---------------')
    const tabs = data.map((tab, i) => (
        <div key={i}>
            <span>{tab.typename}</span>
        </div>
    ))
    return (
        <Wrapper>
            <div className={cls} ref={ref}>
                {tabs}
            </div>
        </Wrapper>
    )
}
