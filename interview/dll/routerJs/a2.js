import React,{Component} from 'react';
import ReactDom from 'react-dom';
import B from './b.js';
export default class A extends Component{
  render(){
    return <div>
      this is A
      <B />
    </div>
  }
}
ReactDom.render(<A/>,document.querySelector("#btn"))
if (module.hot) {
     module.hot.accept()
}
