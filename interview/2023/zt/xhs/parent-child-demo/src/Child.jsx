function Child(props) {
    const { state, setState } = props;
    const onButtonClick = ()=>{
        setState('后代知道了')
    }
    return (<><div>{state}</div><button onClick={onButtonClick}>后代知道了</button></>);
}

export default Child;