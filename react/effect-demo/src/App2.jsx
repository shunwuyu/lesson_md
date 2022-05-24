import { useState, useEffect } from 'react'
import './App.css'
import Post from './Post'
import axios from 'axios'

function App() {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  // 生命周期
  useEffect(() => {
    // Simulating async call
    setTimeout(() => {
      setUsername("John");
    }, 1500);
    // fetch('http://localhost:1234/posts')
    //   .then(data => data.json())
    //   .then(data => {
    //     setPosts(data)
    //   })
   axios.get('http://localhost:1234/posts')
    .then(data => {
      // console.log(data)
      setPosts(data.data)
    })

  }, []);
  return (
    <div className="App">
      <h4>{username}</h4>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <ul>
      {
        posts.map(post => <Post key={post.id} post={post}/>)
      }
      </ul>
    </div>
  )
}

export default App
