import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// class HelloMessage extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }

// function HelloMessage ({name}) {
//   return (
//     <h1>Hello {name}</h1>
//   )
// }

const NotesList = (props) => {
  const { children } = props
  console.log(children);
  return (
    <ol>
      {
        children.map(
          (item, index) => <li key={index}>{item}</li>
        )
      }
    </ol>
  )
}

// class NotesList extends React.Component {
//   render() {
//     return (
//       <ol>
//         {
//           React.Children.map(this.props.children, function (child) {
//             return <li>{child}</li>;
//           })
//         }
//       </ol>
//     );
//   }
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  // <NotesList>
  //   <span>hello</span>
  //   <span>world</span>
  // </NotesList>
)
