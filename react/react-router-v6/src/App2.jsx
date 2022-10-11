import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// 常用路由组件
import { Routes, Route, Link, Outlet } from "react-router-dom"
import { useParams } from "react-router-dom";

function Home() {
  return <div>
    <main>
      <h2>Welcome to the homepage</h2>
    </main>
    <nav>
      <Link to="/about">about</Link>
      <Link to="/user">user</Link>
    </nav>
  </div>
}

function About() {
  return <div>
    <main>
      <h2>Welcome to the about page</h2>
    </main>
    <nav>
      <ol>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </ol>
    </nav>
  </div>
}

const Users = () => {
  return (
    <div>
        users
        <Link to="/user/shunwuyu">shunwuyu</Link>
        <Outlet />
    </div>
  )
}

const UserDetail = (props) => {
  const { id } = useParams();
  return (
    <div>
      UserDetail  {id}
    </div>
  )
}
const NewUser = () => {
  return (
    <div>
      NewUser
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="user" element={<Users />}>
            <Route path=":id" element={<UserDetail />} />
            <Route path="create" element={<NewUser />} />
          </Route>
        </Routes>
      </header>
    </div>
  )
}

export default App
