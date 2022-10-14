import React from 'react'
import { Wrapper } from './style.js'

export default function SaleDetail({detail}) {
    const renderInfo = () => {
        return detail.map(item=>(
            <div key={item.id}>
                <a onClick={() => scrollToAnchor(item.id)}>
                    <span>{item.name}</span>
                </a>
            </div>
        ))
    }
    const renderSaleSlide = () => {
        return detail.map((item,index)=>{
            
            return (
            <div  key={item.id} className="menu-box-detail">
                
                <div className="menu-top">
                    <div id={item.id} className="top-title">
                        {item.name}
                    </div>
                    <span>{item.description}</span>
                </div>
                <div className="menu-box">
                    {
                        item.foods.map((element,index)=>{
                            return(
                                <div key={index}className="menu-detail" >
                                    <div className="menu-detail-box">
                                        <div className="menu-item" key={index}>
                                            <div className="img-box">
                                                <img className="sale-img" src={item.img}  alt=""/>
                                            </div>
                                            <section>
                                                <p className="fooddetail-info">
                                                    <span>{element.name}</span>
                                                </p>
                                                <p className="fooddetail-sale">
                                                    <span>月售{element.month_sales}份</span>
                                                    <span>好评率100%</span>
                                                </p>
                                                <div className="fooddetails-space">
                                                </div>
                                                <span className="sale_price">
                                                    <span>￥{element.lowest_price}</span>
                                                </span>
                                                <div className="food-btn">
                                                    <span>
                                                    +
                                                    </span>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>   
                            )
                            
                    })   
                }    
            </div> 
        </div>

            )
        })
    }
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
    }
  return (
    <Wrapper>
        <div className="sale-box">
            <div className="sale-main">
                <div className="sale-left">
                    <ul>
                        {renderInfo()}
                    </ul>
                </div>
                <div className="sale-detail-box">
                    <div className="sale-detail">
                        {renderSaleSlide()}
                    </div>
                </div>         
            </div>  
            <footer>
                <div className="footer-top">
                <section>
                    <span>满22减8元，满40减14元，满50减20元</span>
                </section>
                </div>
                <div className="footer-box">
                    <div className="footer-text">
                        <p><span>未选购商品</span></p>
                        <p>另需配送费2.5元</p>
                    </div>
                    
                    <a href=""><span className="detail-send">￥20起送</span></a>
                </div>  
            </footer>
            
        </div>
    </Wrapper>
  )
}
