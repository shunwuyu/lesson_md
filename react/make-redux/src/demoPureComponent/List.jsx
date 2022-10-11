import React, { PureComponent, Component } from 'react';
class List  extends PureComponent {
  state = {
    // list: [0, 1, 2, 3],
    count: 1,
  }
  handleUpdateState = () => {
    // this.setState({
    //   list: [0, 1, 2, 3]
    // })
    this.setState({
      count: 1
    })
  }
  render() { 
    console.log('render');
    return ( 
      <div>
        {
          this.state.count
        }
        {/* {
          this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))
        } */}
        <button onClick={this.handleUpdateState}>update</button>
      </div>
     );
  }
}
 
export default List;