// import React, { useState } from 'react'
// import { InfiniteScroll, List, DotLoading } from 'antd-mobile'
// import { mockRequest } from './mock-request'

// const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
//   return (
//     <>
//       {hasMore ? (
//         <>
//           <span>加载中</span>
//           <DotLoading />
//         </>
//       ) : (
//         <span>--- 我是有底线的 ---</span>
//       )}
//     </>
//   )
// }

// export default () => {
//   const [data, setData] = useState<string[]>([])
//   const [hasMore, setHasMore] = useState(true)
//   async function loadMore() {
//     const append = await mockRequest()
//     setData(val => [...val, ...append])
//     setHasMore(append.length > 0)
//   }

//   return (
//     <>
//       <List>
//         {data.map((item, index) => (
//           <List.Item key={index}>{item}</List.Item>
//         ))}
//       </List>
//       {/* <InfiniteScroll loadMore={loadMore} hasMore={hasMore} /> */}
//       <InfiniteScroll loadMore={loadMore} hasMore={hasMore} >
//         <InfiniteScrollContent hasMore={hasMore} />
//       </InfiniteScroll> 
//     </>
//   )
// }

import React, { CSSProperties, useState } from 'react'
import { List, Image, InfiniteScroll } from 'antd-mobile'
import {
  List as VirtualizedList
} from 'react-virtualized'
import { mockRequest } from './mock-request'

type Item = {
  avatar: string
  name: string
  description: string
}

const item = {
  avatar:
    'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  name: 'Novalee Spicer',
  description: 'Deserunt dolor ea eaque eos',
}

export default () => {
  const [data, setData] = useState<Item[]>(Array(20).fill(item))
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    const append = await mockRequest()
    setData(val => [...val, ...Array(append.length).fill(item)])
    setHasMore(append.length > 0)
  }

  function rowRenderer({
    index,
    key,
    style,
  }: {
    index: number
    key: string
    style: CSSProperties
  }) {
    const item = data[index]
    if (!item) return

    return (
      <List.Item
        key={key}
        style={style}
        prefix={
          <Image
            src={item.avatar}
            style={{ borderRadius: 20 }}
            fit='cover'
            width={40}
            height={40}
          />
        }
        description={item.description}
      >
        {item.name} {index}
      </List.Item>
    )
  }

  return (
    <div>
      <VirtualizedList
        autoHeight
        rowCount={data.length}
        rowRenderer={rowRenderer}
        width={50}
        height={200}
        rowHeight={70}
        overscanRowCount={10}
      />
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}