import React from 'react'
import {Wrapper} from './style'
const StoreList = () => {
    const backtop = () => {
        window.scrollTo(0,0)
    }
    return (
        
        <Wrapper>
            
                <div className="recommend_store"><p>— 推荐商家 —</p></div>
                <div className="store_sort">
                    <div>
                        <p>综合排序</p>
                        <i className = "fa fa-caret-down"></i>
                    </div>
                    <div><p>距离最近</p></div>
                    <div><p>品质联盟</p></div>
                    <div>
                        <p>筛选</p>
                        <i className = "fa fa-glass"></i>
                    </div>
                </div>
                
                <div onClick = {backtop} className = "back_top">
                    <i className = "fa fa-angle-double-up"></i>
                </div> 
               
            </Wrapper>
    )
}

export default StoreList