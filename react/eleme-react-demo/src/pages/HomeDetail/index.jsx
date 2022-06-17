import React, {useEffect} from 'react'
import {Wrapper} from './style'
import { NavBar,Icon } from 'antd-mobile';
import { useNavigate, Outlet } from 'react-router-dom';

import bg from '../../asserts/images/b1.jpg'
import HomeDetailNav from '../../components/common/HomeDetailNav';
import Order from "./HPage/Order"

const HomeDetail = () => {
    const navigate = useNavigate()
    // useEffect(() => {
    //     navigate('/homedetail/order')
    // })
    return (
        
        <Wrapper>
            <div className = "detail-top">
                <NavBar 
                    className="detail-left"
                        // mode="light"
                    onLeftClick={() => navigate(-1)}
                    icon={<Icon type="left" />}>
                </NavBar>
                <div className = "detail-title-box">
                    {/* <div className="detail-title-img">
                        <img src="https://img.36krcdn.com/20220617/v2_439101281efd4d52a4e5abd469f9d8b9_img_jpg" alt=""/>
                    </div> */}
                    <div className="title-detail">
                        <h2> 
                            <span>中国好凉皮</span>
                            <i className="fa fa-arrow-right"></i>
                        </h2>
                        <div className="detail-box">
                            <span>评价4.3</span>
                            <span>月售</span>
                            <span>商家配送约</span>
                        </div>
                        
                    </div>
                    <div className="sum-detail">
                        <div className="img-detail">
                            <span className="sale-detail">“满减”<span>满减</span></span>
                            <span className="num-detail">满四十减1</span>
                        </div>
                        <div className="sale">
                            “3”个优惠
                        </div>
                    </div>
                    <p>公告：本店香锅不单炒，套餐必点！单加菜品需与套餐同时点！</p>
                </div>
            </div>
            <HomeDetailNav></HomeDetailNav>
            <Outlet />
        </Wrapper>
    )
}

export default HomeDetail