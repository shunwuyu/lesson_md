import { useState } from 'react'

import './App.css'
import { flushSync } from 'react-dom';

function FixedSizeList({ containerHeight, itemHeight, itemCount, children }) {
  // children 语义不好，赋值给 Component
  const Component = children;

  const contentHeight = itemHeight * itemCount; // 内容高度
  const [scrollTop, setScrollTop] = useState(0); // 滚动高度

  // 继续需要渲染的 item 索引有哪些
  let startIdx = Math.floor(scrollTop / itemHeight);
  let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight);

  // 上下额外多渲染几个 item，解决滚动时来不及加载元素出现短暂的空白区域的问题
  const paddingCount = 2;
  startIdx = Math.max(startIdx - paddingCount, 0); // 处理越界情况
  endIdx = Math.min(endIdx + paddingCount, itemCount - 1);

  const top = itemHeight * startIdx; // 第一个渲染 item 到顶部距离

  // 需要渲染的 items
  const items = [];
  for (let i = startIdx; i <= endIdx; i++) {
    items.push(<Component key={i} index={i} style={{ height: itemHeight }} />);
  }

  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => {
        // 处理渲染异步导致的白屏现象
        // 改为同步更新，但可能会有性能问题，可以做 节流 + RAF 优化
        flushSync(() => {
          setScrollTop(e.target.scrollTop);
        });
      }}
    >
      <div style={{ height: contentHeight }}>
        {/* 一个将 items 往下推到正确位置的空元素 */}
        <div style={{ height: top }}></div>
        {items}
      </div>
    </div>
  );
}


function Item({ style, index }) {
  return (
    <div
      className="item"
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue'
      }}
    >
      {index}
    </div>
  );
}

function App() {
  const list = new Array(10000).fill(0).map((item, i) => i);
  return (
    <>
      列表项高度固定 - 虚拟列表实现
      <FixedSizeList
        containerHeight={300}
        itemCount={list.length}
        itemHeight={50}
      >
        {Item}
      </FixedSizeList>
    </>
  )
}

export default App
