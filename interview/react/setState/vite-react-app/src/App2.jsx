import React from 'react'
import logo from './logo.svg'
import './App.css'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 1
//     }
//   }

//   bindClick() {
//     console.log('--------------')
//     // this.state.count++;
   
//     // this.setState({
//     //   count: this.state.count+1
//     // })
//     // console.log(this.state.count);

//     // this.setState({count: this.state.count + 1}, ()=>{
//     //   console.log(this.state.count) // 1
//     // })

//     this.setState(prevState => {
//       console.log("console from func: " + prevState.count)
//       return {
//         count: prevState.count + 1
//       }
//     }, () => {
//       console.log('last console: '+ this.state.count)
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.bindClick.bind(this)} type="button">+1</button>
//         {this.state.count}
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor() {
    this.state = {
      count: 0
    }
  }
​
//   componentDidMount() {
//     // 生命周期中调用
//     this.setState({ count: this.state.count + 1 });
//     console.log("lifecycle: " + this.state.count);
//     setTimeout(() => {
//       // setTimeout中调用
//       this.setState({ count: this.state.count + 1 });
//       console.log("setTimeout: " + this.state.count);
//     }, 0);
//     document.getElementById("div2").addEventListener("click", this.increment2);
//   }
// ​
//   increment() {
//     // 合成事件中调用
//     this.setState({ count: this.state.count + 1 });
//     console.log("react event: " + this.state.count);
//   };
// ​
//   increment2() {
//     // 原生事件中调用
//     this.setState({ count: this.state.count + 1 });
//     console.log("dom event: " + this.state.count);
//   };
// ​
//   render() {
//     return (
//       <div className="App">
//         <h2>couont: {this.state.count}</h2>
//         <div id="div1" onClick={this.increment.bind(this)}>
//           click me and count+1
//         </div>
//         <div id="div2">click me and count+1</div>
//       </div>
//     );
//   }
}


export default App
