import React, { useEffect, useState } from 'react'
import {CityWrapper} from './style'
import { NavLink } from "react-router-dom"
import { getCities } from '../../api/request'

const Cities = () => {
    const [cities, setCities] = useState([])
    useEffect(() => {
        (async function() {
            const {data} =  await getCities()
            // console.log(data)
            setCities(data)
        })()
    })
    // console.log()
    const renderCities = () => {
        return cities.map(item => {
        //    console.log(item)
            return <NavLink 
                        key = {item.id} 
                        className = "cityName"
                        to = {{
                            pathname:"/home",
                            search:"nm=" + item.nm
                        }}
                    >{item.nm}</NavLink>
        })
    }
    return (
        <CityWrapper>
            {renderCities()}
        </CityWrapper>
    )
}

export default Cities