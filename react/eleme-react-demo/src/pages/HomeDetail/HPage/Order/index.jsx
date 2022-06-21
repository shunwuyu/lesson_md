import React, { useState, useEffect } from 'react'
import HomeDetailBanner from "../../../../components/common/HomeDetailBanner"
import { getHomeDetailOrder } from '../../../../api/request'
import SaleDetail from "./SaleDetail"

const Order = () => {
    const [banners, setBanners] = useState([])
    const [detail, setDetail] = useState([])
    useEffect(() => {
        (async() => {
            let {data} = await getHomeDetailOrder()
            // console.log(data)
            setBanners(data)
            setDetail(data)
        })()
    }, [])
    return (
        <div>
            <HomeDetailBanner banners={banners}></HomeDetailBanner>
            <SaleDetail detail={detail}></SaleDetail>
        </div>
    )
}

export default Order