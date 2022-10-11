import { useState } from 'react'
import { GlobalStyle, Top, Tab, TabItem } from './style';
import { IconStyle } from './assets/iconfont/iconfont';

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <TabItem><span > 推荐 </span></TabItem>
        <TabItem><span > 歌手 </span></TabItem>
        <TabItem><span > 排行榜 </span></TabItem>
      </Tab>
      {/* 
      
      <i className="iconfont">&#xe62b;</i> */}
    </div>
  )
}

export default App
