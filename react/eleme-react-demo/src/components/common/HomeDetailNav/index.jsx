import React, { useEffect } from 'react'
import Swiper from "swiper"
import { Link } from "react-router-dom"
import { Wrapper } from './style'
const HomeDetailNav = ({id}) => {
    let homeNavs = [{ id: 1, desc: "点餐", path: "/order" }, { id: 2, desc: "评价", component: Comment, path: "/comment" }, { id: 3, desc: "商家", path: "/business" }]
    useEffect(() => {
        new Swiper(".navbar",{
            slidePreView:"auto"
        })
    })
    return (
        <Wrapper>
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                {homeNavs.map((item, index) => {
                    return (
                        <Link 
                            index={index} 
                            to={`/homedetail/${id}${item.path}`} 
                            key={item.id} className="nav-item swiper-slide"
                        >
                        {item.desc}
                        </Link>
                    ) 
                    })
                }
                </div>
            </div>
    </Wrapper>)
}

export default HomeDetailNav