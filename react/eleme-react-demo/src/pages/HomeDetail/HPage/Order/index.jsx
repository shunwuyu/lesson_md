import React, { useState, useEffect } from 'react'
import HomeDetailBanner from "../../../../components/common/HomeDetailBanner"
import { getHomeDetailOrder } from '../../../../api/request'
// import SaleDetail from "./SaleDetail"

const Order = () => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        (async() => {
            let {data} = await getHomeDetailOrder()
            // console.log(data)
            setBanners(data)
        })()
    }, [])
    return (
        <div>
            <HomeDetailBanner banners={banners}></HomeDetailBanner>
            {/* <SaleDetail></SaleDetail> */}
        </div>
    )
}

export default Order