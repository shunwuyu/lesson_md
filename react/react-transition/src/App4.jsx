import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
function App() {
    const [isShow,setIsShow] = useState(false)
    const toToggole = () => {
        setIsShow(!isShow)
    }
    return (
        <div>
            <CSSTransition
                in={isShow}
                timeout={2000}
                classNames="test"
                unmountOnExit
                appear={true}
            >
                <div>hello</div>
            </CSSTransition>
            <div><button onClick={toToggole}>点我</button></div>
        </div>
    )
}

export default App