// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: ''
    }
  }

  componentDidMount() {
    // this.setState({
    //   msg: '你好'
    // })
    fetch('http://localhost:3000/api')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          msg: data.msg
        })
      })
  }

  render() {
    return (
      <>
        {this.state.msg}
      </>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
