import {useState} from 'react'
import ComA from './ComA'
import ComB from './ComB'

export default function Channel() {
    const [stateA, setStateA] = useState("A");
    const [stateB, setStateB] = useState("B");
    return (
        <>
            <ComA stateA={stateA} setStateB={setStateB} setStateA={setStateA} />
            <h6>分割线</h6>
            <ComB stateB={stateB} setStateA={setStateA} setStateB={setStateB} />
        </>
    )
}
