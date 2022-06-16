import React, {useState, useEffect} from 'react'
// import { getAllXiaoce } from '../../api/request'
import { getAllXiaoce } from '@/api/request'

const Xiaoce = () => {
    useEffect(() => {
        (async function() {
            await getAllXiaoce()
        })()
    })
    return (
        <div></div>
    )
}

export default Xiaoce