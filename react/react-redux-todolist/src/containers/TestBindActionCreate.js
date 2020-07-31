import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from '../redux-source/index';

const create1 = (val) => {
  return {
    type: 'HANDLE_1',
    val: val
  }
}
const create2 = (val, b) => {
  console.log('arg', val, b);
  return {
    type: 'HANDLE_2',
    val: val
  }
}
class Test extends React.Component {
  handleClick1 = () => {

  }
  handleClick2 = () => {
    this.props.create2('val2', 'val2');
  }
  render() {
    const { val1, val2 } = this.props;
    return (
       <div>
         <p onClick={this.handleClick1}>val1:  { val1 }</p>
         <p onClick={this.handleClick2}>val2:  { val2 }</p>
       </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    val1: state.val1,
    val2: state.val2
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    create1,
    create2
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);