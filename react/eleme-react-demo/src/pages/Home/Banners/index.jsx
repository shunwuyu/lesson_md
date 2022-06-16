import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Swiper from 'swiper'

const Banners = ({banners}) => {
    useEffect(() => {
        new Swiper(".btn_banners",{
            loop:true,
            pagination:{
                el:".swiper-pagination",
            }
        })
    })

    const renderBtnBannerspage1 = () => {
        let items = banners.slice(0, 10);
        console.log(items);
        return items.map(item => {
            return (  
                <Link to= "/eleme/all" 
                    className = "swiper-item"
                    key = {item.id}
                >   
                    <div>
                        <p><img src={item.img} alt=""/></p>
                        <span>{item.title}</span>  
                    </div>
                </Link>
            )
        })
    }

    const renderBtnBannerspage2 = () => {
        let items = banners.slice(10)
        console.log(items)
        return items.map(item => {
            return (  
                <Link to= "/eleme/all" 
                    className = "swiper-item"
                    key = {item.id}
                >   
                    <div>
                        <p><img src={item.img} alt=""/></p>
                        <span>{item.title}</span>  
                    </div>
                </Link>
            )
        })
    }

    return (
        <div className="btn_banners swiper-container">
            
                <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {renderBtnBannerspage1()}
                        </div>
                        <div className="swiper-slide">
                            {renderBtnBannerspage2()}
                        </div>
                </div>
                <div className="swiper-pagination"></div>
        </div>
    )
}

export default Banners