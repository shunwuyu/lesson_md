import React, { useEffect, useState } from 'react'
import Header from './Header'
import Banners from './Banners'
import SetMeal from './SetMeal'
import StoreList from './StoreList'
import StoreInfo from './StoreInfo'
import { getBanners } from '../../api/request'
import {getRestaurants} from '../../api/request'

const Home = () => {
    const [banners, setBanners] = useState([])
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        (async function() {
            let {data} = await getBanners()
            // console.log(data)
            setBanners(data)
            let {data:resData} = await getRestaurants()
            setRestaurants(resData)
        })()
    }, [])
    return (
        <div id="home">
            <Header></Header>
            <Banners banners={banners}></Banners>
            <SetMeal />
            <StoreList />
            <StoreInfo restaurants={restaurants}/>
            
        </div>
    )
}

export default Home