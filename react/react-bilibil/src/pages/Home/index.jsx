import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './style'
import Header from "@/components/header";
import { getPartitions } from '@/api/request'
import TabBar from "@/components/tab-bar";

export default function Home() {
    const [tabBarData, setTabBarData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        // console.log('-----')
        navigate('/home')
    }, [])
    useEffect(() => {
        (async () => {
            const {data} = await getPartitions()
            setTabBarData(data)
        })()
    }, [])
    const handleClick = () => {

    }
    let firstLevelTab = tabBarData[0]?tabBarData[0]:[]
    return (
        <Wrapper>
            <Header /> 
            <div className="partition">
                <div className="tabBar">
                    <TabBar data={ [{ id: 0, typename: "首页"}].concat(firstLevelTab)} type={"indicate"} onClick={handleClick}/>
                </div>
            </div> 
        </Wrapper>
    )
}
