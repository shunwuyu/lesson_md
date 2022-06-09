import React, {useState, useEffect} from 'react'
import './App.css'
const Animate = (props) => {
    const {
        animation = false,
        transitionStyles = {enter: { opacity: 1, }, leave: { opacity: 0, }, },
        children,
    } = props;
    console.log(animation, transitionStyles, children)
    const [status, setStatus] = useState(() => {
        if (animation) return 'enter';
        else return 'leave';
    });
    useEffect(() => setStatus(animation ? 'enter' : 'leave'), [animation]);
    const prevStyle = children?.props?.style || {};
    const animateStyle = transitionStyles[status];
    const transitionStyle = { transition: `all 300ms ease-in-out`, };
    const styles = { ...prevStyle, ...animateStyle, ...transitionStyle, };
    return React.cloneElement(React.Children.only(children), {
        style: {
            ...styles,
        },
    })
}
const App =  () => {
    const [play, setPlay] = useState(false);
    return (
        <div className="App">
            <button onClick={() => setPlay(!play)}>切换</button>
            <Animate animation={play}>
                <div className="box"></div>
            </Animate>
        </div>
    )
}

export default App