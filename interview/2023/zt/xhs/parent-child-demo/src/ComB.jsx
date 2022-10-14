function ComB(props) {
    const onButtonClick = () => {
      props.setStateA(props.stateB);
    };
    const onResetButtonClick = () => {
      props.setStateB("B");
    };
    return (
      <>
        <div>{props.stateB}</div>
        <button onClick={onButtonClick}>把 A 变成 B</button>
        <button onClick={onResetButtonClick}>还原 B</button>
      </>
    );
  }

export default ComB