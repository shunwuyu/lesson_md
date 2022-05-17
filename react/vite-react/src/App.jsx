import { useState, useEffect } from 'react'
import './App.css'

// const LikeButton = () => {
//   const [liked, setLiked] = useState(false);
//   const handleClick = () => {
//     setLiked(!liked)
//   }
//   const text = liked ? 'like' : 'haven\'t liked';
//   return (
//     <p onClick={handleClick}>
//       You {text} this. Click to toggle.
//     </p>
//   )
// }

// const Input = () => {
//   const [value, setValue] = useState('Hello');
//   const handleChange = (event) => {
//     setValue(event.target.value)
//   }
//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <p>
//         {value}
//       </p>
//     </div>
//   )
// }

// const Hello = ({name}) => {
//   let [opacity, setOpacity] = useState(1.0);
//   useEffect(() => {
//     setInterval(() => {
//       opacity -= 0.5;
//       if (opacity < 0.1) {
//         opacity = 1.0;
//       }
//       setOpacity(opacity)
//     }, 1000)
//   }, [])
//   return (
//     <div style={{opacity: opacity}}>
//       Hello {name}
//     </div>
//   )
// }

// const UserGist = ({source}) => {
//   const [username, setUsername] = useState('');
//   const [lastGistUrl, setLastGistUrl] = useState('');
//   useState(() => {
//     fetch(source)
//       .then(data => data.json())
//       .then(data => {
//         console.log()
//         var lastGist = data[0];
//         setUsername(lastGist.owner.login);
//         setLastGistUrl(lastGist.html_url)
//       })
//   }, [])
//   return (
//     <div>
//       {username}'s last gist is <a href={lastGistUrl}>here</a>.
//     </div>
//   )
// }

function App() {
  
  return (
    <div className="App">
      {/* <LikeButton />       */}
      {/* <Input/> */}
      {/* <Hello name="world" /> */}
      <UserGist source="https://api.github.com/users/octocat/gists" />
    </div>
  )
}

export default App
