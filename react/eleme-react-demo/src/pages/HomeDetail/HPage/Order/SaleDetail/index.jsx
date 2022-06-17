import React from 'react'

export default function SaleDetail() {
    const renderInfo = () => {
        
    }
  return (
    <div className="sale-box">
        <div className="sale-main">
            <div className="sale-left">
                <ul>
                    {renderInfo()}
                </ul>
            </div>
            <div className="sale-detail-box">
                <div className="sale-detail">
                    {/* {this.renderSaleSlide()} */}
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
                
                <a href=""><span class="detail-send">￥20起送</span></a>
            </div>  
        </footer>
        
    </div>
  )
}
