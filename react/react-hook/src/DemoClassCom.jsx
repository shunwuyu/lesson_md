import React, { Component } from 'react';
class App extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  };
  onResize = () => {
    console.log('window resize');
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    })
  }
  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener('resize', this.onResize, false)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false)
  }
  componentDidUpdate() {
    document.title = this.state.count;
  }
  render() {
    const { count, size } = this.state;
    return (
      <button type="button"
        onClick={() => { this.setState({ count: count + 1 }) }}
      >
        Click({count})
        size: {size.width}x{size.height}
      </button>
    )
  }
}

export default App;
