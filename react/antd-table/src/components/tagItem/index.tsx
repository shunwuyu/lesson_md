import React, { useState } from 'react'
import './index.less'
import { fetchData } from '../../utils/fetch';
interface IProps {
  tagObj: {
    title: string,
    id: number
  },
  updateList: (id: number) => void
} 




export const TagItem: React.FC<IProps> = (props) => {
  const [isHover, setIsHover] = useState(false)

  const deleteTag = () => {
    // console.log('delete');
    const url = `/api/tag/${props.tagObj.id}`
    fetchData(url, 'delete').then(res => {
      props.updateList(props.tagObj.id)
    })
  }
  return (
    <div className='tagComponentWrapper flexcc' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
      <div className='flexRow'>
        <h1>{props.tagObj.title}</h1>
        {isHover && <img onClick={deleteTag} className='delImg' alt='img_demo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAACrq6uqqqqqqqqqqqqqqqqqqqqqqqqvr6+pqamqqqqrq6unp6epqamqqqqqqqpFGB6KAAAAD3RSTlMAQGAwP9CQ8BCgn3Ag328I8sB8AAABKUlEQVRIx+yQMQrCQBBFhw2IWOkJ3BvESq9il0CO4AG0sfcm2ljrmVaiWMgXhuVPmCyewNcksI+f7JM/ng08n04GTPcY04pxRIFejAb4OTFDkQeFM/BeOK7AUzIBwEk8jf1EDfQH8dyA/FYB2MqIJWCRXveywEg7KQuMNC8LjJSkLDDSRZR1Z08VGIm3iTnLisIw0gRIOUtLgZFU0IkACi5SBZ2owU+4SHoUg2pZcJH0TC0KjGQTOkDBRQpQIoUcyU0klsyR/EQ04bv5////wquAE48VhB1J2JuEA4pwUBOOLMLRDeEuwJdgwIGFL8kxcBJItNDAoiDjwAKL3MxLOPsTLkDggYWrCIIHlgsaeIpUiDFw4igGCRakhIpigoU5/urgazLDKIACABa7LLcqkm5rAAAAAElFTkSuQmCC' />}
      </div>
    </div>
  )
}