import { useState } from 'react';
 
export default function App() {
  const [list, setList] = useState(['jack', 'rose']);
 
  return (
    <div>
      {/*
        使用 index 作为 key 会导致临时数据（比如，文本框中输入的内容）错误
        因为使用 index 作为 key 后，React 会按照索引来复用元素
        比如，我们在 索引为0 的文本框中输入：100
             插入元素后，即使索引为 0 的元素已经变为新的元素了，但是，最终还是索引为 0 的文本框中有 100 内容
             这样，就会导致数据错乱了
      */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <input />
          </li>
        ))}
      </ul>
 
      {/* <ul>
        {list.map((item, index) => (
          <li key={item}>
            {item} <input />
          </li>
        ))}
      </ul> */}
      <button onClick={() => setList(['tom', ...list])}>给数组添加数据</button>
    </div>
  );
}