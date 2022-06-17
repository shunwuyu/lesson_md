import React, { useEffect } from 'react'
import Swiper from "swiper"
import './style.css'

const HomeDetailNav = ({banners}) => {
    useEffect(() => {
        new Swiper(".detail-banners",{
            slidePreView:"auto"
        })
    })
    const renderSlide = () => {
        // console.log(banners, '//////')
        return (
            banners.map((item)=>(
                <div className="swiper-slide food-item" key={item.id}>
                    <img className="food-img" src={item.image_path} alt=""/>
                    <p className="food-card">{item.name}</p>
                    <p className="food-card-desc">{item.tips}</p>
                    <div className="food-sale">
                        <p className="food-price">￥{item.price}</p>
                        <span className="btn">+</span>
                    </div>
                </div>
            ))
        )
    }
    return (
        <div>
            <div className="title">
                <div className="detail-banners swiper-container">
                    <div className="swiper-wrapper food-box">
                        {renderSlide()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetailNav