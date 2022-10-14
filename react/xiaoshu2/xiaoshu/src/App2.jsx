import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// 现在需要在页面上显示一本书的章节，章节内容存放到一个数组里面


const User = (props) => {
  const { username, age, gender }  =  props.user
  return (
    <div>
        <div>姓名：{username}</div>
        <div>年龄：{age}</div>
        <div>性别：{gender}</div>
        <hr />
      </div>
  )
}

const LessonsList = ({lessons}) => {
  return (
    <div>
        // 不要忘记 {}
      {lessons.map(function(lesson, index){
        return (<Lesson key={index} _index={index} lesson={lesson} />)
      })}
    </div>
  )
}

const Lesson = ({lesson}) => {
  const handleClick = () => {
    console.log(lesson)
  }
  return (
    <div onClick={handleClick}>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
    </div>
  )
}

function App() {
  const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
  ]
  const [count, setCount] = useState(0)
  const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]

  const usersElements = [] // 保存每个用户渲染以后 JSX 的数组
    for (let user of users) {
      usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
        <div>
          <div>姓名：{user.username}</div>
          <div>年龄：{user.age}</div>
          <div>性别：{user.gender}</div>
          <hr />
        </div>
      )
    }


  return (
    <div className="App">
      {[
          <span>React.js </span>,
          <span>is </span>,
          <span>good</span>
      ]}
      {/* { usersElements } */}
      {users.map((user) => {
          return (
            <div>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr />
            </div>
          )
        })}
        {users.map((user) => <User user={user} />)}
        <LessonsList lessons={lessons}/>
    </div>
  )
}

export default App
