import { useState } from 'react'
// Header 组件
// Title，它专门负责显示标题
const Title = () => {
    return (
        <h1>React 小书</h1>
    )
}

const Header = () => {
    return (
        <div>
            <Title />
            <h2>This is Header</h2>
            {/* 组件封装的好处, 复用 灵活在使用在任何组件内
                自定义的组件都必须要用大写字母开头
            */}
            {/* <Title />
            <Title /> */}
        </div>
    )
}

const Main = () => {
    return (
        <div>
            <h2>This is main content</h2>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <h2>This is footer</h2>
        </div>
    )
}

// function App() {
//   return (
//     <div className="App">
//         <Header/>
//         <Main />
//         <Footer />
//     </div>
//   )
// }


const Bathroom = () => {
    return (
        <div className='bathroom'>
            <h1>This is bathroom</h1>
        </div>
    )
}

const Man = () => {
    return (
        <div className='man'>
            <h1>This is Man</h1>
        </div>
    )
}

const Dog = () => {
    return (
        <div className='dog'>
            <h1>This is Dog</h1>
        </div>
    )
}

const Room = () => {
    return (
        <div className='room'>
            <Man />
            <Dog />
            <Dog />
        </div>
    )
}

const House = () => {
    return (
        <div className='house'>
            <Room />
            <Bathroom />
        </div>
    )
}

function App() {
    return (
        <House />
    )
}

export default App