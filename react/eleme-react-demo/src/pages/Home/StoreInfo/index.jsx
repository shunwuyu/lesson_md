import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Wrapper} from './style'

const StoreInfo = ({restaurants}) => {
    console.log('|||????', restaurants)
    if (!restaurants.length ) return ;
    return (
        <Wrapper>
           {restaurants.map(
            item =>  (
                
                <Link to= '/homedetail' key={item.restaurant.authentic_id} className="homelist">
                    <div className="home_outBox">
                        <div className="home_outBox_">
                            <div className="home_insideBox-top">
                                <div className="home_imgLeft"><img src={item.restaurant.image_path} alt=""/></div>
                                <div className="home_content">
                                    <div className="home_restaurant">{item.restaurant.name}</div>
                                    <div className="home_sell">
                                        <span>评分：{item.restaurant.rating}</span>
                                        <span>月售：{item.restaurant.recent_order_num}</span>
                                    </div>
                                    <div className="home_distance">
                                        <div>
                                            <span>¥{item.restaurant.piecewise_agent_fee.rules[0].price}起送</span>   
                                            <span className="home_price">{item.restaurant.piecewise_agent_fee.description}</span>   
                                        </div>
                                        <div>
                                            <span>{(item.restaurant.distance / 1000).toFixed(1)}Km</span>
                                            <span className="home_price">{item.restaurant.order_lead_time}分钟</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home_insideBox-foot">
                                <div className="home_discount">
                                    <span className="home_icon icon-J">{item.restaurant.activities[0].icon_name}</span><span>{item.restaurant.activities[0].tips}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
           )}
        </Wrapper>
    )
}

export default StoreInfo