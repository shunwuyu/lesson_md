function ComA(props) {
    const onButtonClick = () => {
      props.setStateB(props.stateA);
    };
    const onResetButtonClick = () => {
      props.setStateA("A");
    };
    return (
      <>
        <div>{props.stateA}</div>
        <button onClick={onButtonClick}>把 B 变成 A</button>
        <button onClick={onResetButtonClick}>还原 A</button>
      </>
    );
  }

  export default ComA