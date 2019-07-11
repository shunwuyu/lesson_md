import { Component } from 'react';

class App extends Component {
  componentDidMount() {
    console.log('mount');
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>Header (layouts/index.js)</div>
        <hr/>
        <hr/>
        {
          children
        }
        <hr/>
        <div>Footer (layouts/index.js)</div>
      </div>
    );
  }
}

export default App;