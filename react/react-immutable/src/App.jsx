import React from 'react';
import logo from './logo.svg';
import immutable from 'immutable';
import { Provider, Consumer } from './Context';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

var immutableData = immutable.fromJS({
  a: 1,
  b: 2,
  c: {
    d: 3
  }
});
var a = immutable.fromJS([1, 2, 3, 4, 5])
var data3 = immutableData.set('a', 2);   // data3中的 a = 2
console.log(immutableData, data3)
console.log(immutableData.get('c') === data3.get('c'))
console.log(immutableData.setIn(['d', 'e'], 'val'),
  immutableData.getIn(['d', 'e'], 'val'),
  immutableData.getIn(['d', 'd', 'e'], 'default')
)

// list
//immutable
var arr = immutable.fromJS([1, 2, 3, 4])
//错误用法
arr.push(5);
console.log(arr) //[1,2,3,4]
console.log('keys', ...immutableData.keys())
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
const store = immutable.fromJS({
  header: [1, 2, 3, 4],
  main: {
    topic: [{ content: 'content1' }]
  },
  footer: {
    auth: 'zm'
  }
})
class App extends React.Component {
  state = {
    store
  }
  pushHeader = () => {
    var a = this.state.store.updateIn(['header'], list => list.push(555))
    console.log(a.get('header'));
    this.setState({
      store: a
    })
  }
  render() {
    const store = this.state.store;
    console.log(123, store.get('header'))
    return (
      <div >
        <button onClick={this.pushHeader}>push header</button>
        <div>
          <Header header={store.get('header')} />
          <Main main={store.get('main')} />
          <Footer footer={store.get('footer')} />
        </div>
      </div>
    )
  }
}

export default App;
