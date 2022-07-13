import { useState } from 'react'
import { connect } from 'react-redux'
import checkedImg from './assets/img/shopping_check.png';
import checkNormalImg from './assets/img/shopping_checkNormal.png';
import './assets/css/shoppingCart.css'
import { 
  checkGoodsAction,
  changeGoodsNumAction,
  checkAllGoodsAction
} from './store/actionCreators/'

function App(props) {
  const { goodsList, checkAll, price } = props
  const { 
    checkGoodsDispatch, 
    changeGoodsNumDispatch,
    checkAllGoodsDispatch
  } = props
  const checkGoods  = (goodsId) => {
    // console.log(goodsId, '-------------')
    checkGoodsDispatch(goodsId)
  }
  const changeGoodNum = (e, status, goodsId) => {
    e.preventDefault();
    e.stopPropagation();
    let data = {
      status:status,
      goodsId:goodsId
    }

    changeGoodsNumDispatch(data)
  }
  const checkAllGoods = () => {
    checkAllGoodsDispatch(checkAll);
  }
  return (
    <div className='shoppingCartWarp'>
        <div className='shoppingCartWarp_header'>
          <div>购物车</div>
        </div>
        <div className='shoppingCartWarp_content'>
        {
          goodsList.map((item,index) => (
            <div className='shoppingCartWarp_content_list' key={index} onClick={checkGoods.bind(null,item.goodsId)}>  
              <div className='shoppingCartWarp_content_check'>
              {
                item.check ? <img src={checkedImg} alt=""/> : <img src={checkNormalImg} alt=""/>
              }
              </div>
              <div className='shoppingCartWarp_content_list_imgWarp'>
                <img src={item.goodsSrc} alt=""/>
              </div>
              <div className='shoppingCartWarp_content_list_info'>
                <div className='shoppingCartWarp_content_list_title'>{item.goodsTitle}</div>
                <div className='shoppingCartWarp_content_list_subtitle'>{item.goodsSubtitle}</div>
                <div className='shoppingCartWarp_content_list_action'>
                  <div className='shoppingCartWarp_content_list_price'>￥{item.goodsPrice}</div>
                  <div className='shoppingCartWarp_content_list_actionNum'>
                  {
                    item.goodsNum > 0 &&  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => changeGoodNum(e, 'reduce', item.goodsId)}>-</div>
                      <div className='shoppingCartWarp_content_list_actionNumInfo'>{item.goodsNum}</div>
                    </div>
                  }
                    <div className='shoppingCartWarp_content_list_actionNumChangeButton' onClick={(e) => changeGoodNum(e, 'add', item.goodsId)}>+</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        </div>
        <div className='shoppingCartWarp_footer'>
          <div className='shoppingCartWarp_footer_action'>
            <div className='shoppingCartWarp_footer_checkAll' onClick={() => checkAllGoods()}>
              {
                checkAll ? <img src={checkedImg} alt=""/> : <img src={checkNormalImg} alt=""/>
              }
              全选
            </div>
            <div className='shoppingCartWarp_footer_mount'>
              总计&nbsp;:&nbsp;<span>{price.toFixed(2)}</span>
            </div>
          </div>
        </div>
    </div>
  )
}
function mapStateToProps(state) {
  let price = state.goods.list.reduce((total,item) => total + (item.check ? parseFloat(item.goodsPrice*item.goodsNum) : 0),0)
  return {
    goodsList:state.goods.list,
    checkAll: state.goods.list.filter(item => item.check).length == state.goods.list.length,
    price:price
  }
}
function mapDispatchToProps(dispatch) {
  return {
    checkGoodsDispatch(goodsId) {
      dispatch(checkGoodsAction(goodsId))
    },
    changeGoodsNumDispatch(data) {
      dispatch(changeGoodsNumAction(data))
    },
    checkAllGoodsDispatch(data) {
      dispatch(checkAllGoodsAction(data))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
