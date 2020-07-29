import React, { useState, useEffect } from 'react';
import { ITag } from './interface'
import { fetchData } from '../utils/fetch'
import { TagItem } from '../components/tagItem'

const initialTags: ITag[] = []
const WelcomePage: React.FC<{}> = () => {
  const [tags, setTag] = useState(initialTags)
  const [showModal, setShowModal] = useState(false)
  // 第二个参数
  useEffect(() => {
    const url = '/api/tag/all'
    fetchData(url, 'GET').then(data => { 
      console.log(data, '------------');
      setTag(data.data) 
    })
  }, [])

  const updateList = (id: number) => {
    // console.log(id);
    let newTags = tags.filter((tag) => tag.id !== id);
    // console.log(newTags)
    setTag(newTags)
  }

  return (
    <div className='inputPageWrapper'>
      { tags.map(tagObj => (<TagItem key={tagObj.id} tagObj={tagObj} updateList={updateList}/>)) }
    </div>
  )
}
export default WelcomePage;