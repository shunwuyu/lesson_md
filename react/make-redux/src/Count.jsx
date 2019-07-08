import React, { Component } from 'react';
import connect from './react-redux/connect';
class Count extends Component {
  state = {  }
  render() { 
    const { increment, decrement, count} = this.props;
    return (
      <div>
        {count}
        <button onClick={increment}> + 1</button>
        <button onClick={decrement}> - 1</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state
})
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);