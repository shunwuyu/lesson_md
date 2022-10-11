import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProductDetail} from '../../store/reducers/product/actions';
import Swiper from 'swiper';
import './Detail.css';
import 'swiper/css/swiper.css';

function Detail(props) {
  const { getProductDetailDispatch, detail } = props;
  const baseInfo = props.personal.baseInfo;
  console.log(baseInfo, '||||||||-----------');
  useEffect(() => {
    const id = props.match.params ? props.match.params.id : 0;
    console.log(id)
    getProductDetailDispatch(id);
  }, [])

  useEffect(() => {
		if (detail.images) {
			new Swiper('.detail-swiper', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					// type: 'fraction'
				},
				autoplay: {
					delay: 2000,
					disableOnInteraction: false
				}
			});
		}
	}, [detail]);

  async function handle(ev, type) {
    ev.preventDefault();
    if (!baseInfo) {
			console.log('请先登录');
      props.history.push('/personal/login');
			return;
		}
  }

  return (
    <>
    {
      detail.images?<section className="detailBox">
        <div className="swiper-container detail-swiper">
				  <div className="swiper-wrapper">
            {detail.images.map((item, index) => {
              return <div className="swiper-slide" key={index}>
                <img src={item} alt="" />
              </div>;
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="info">
				  <div className="price">
					  <span className="price1">￥{detail.discount}</span>
            {detail.discount === detail.price ? null : <span className="price2">￥{detail.price}</span>}
            {detail.tag.split('|').map((item, index) => {
						  return item ? <span className="tag" key={index}>
							  {item}
						  </span> : null;
					  })}
          </div>
          <h5 className="title">{detail.title}</h5>
          <p className="desc">{detail.detail.text}</p>
        </div>
        {/* 在JSX中导入静态资源图片（相对地址），需要基于CommonJS/ES6Module规范导入，保证webpack编译的时候地址的正确性 */}
        <img src={require('../../assets/images/ce497b9d0341ac785d77e343dddab7e7.png')} alt="" className="guanggao" />
        <div className="xiangxi">
          {detail.detail.images.map((item, index) => {
            return <img src={item} alt="" key={index} />;
          })}
        </div>
        {/* 头部 */}
        <div className="topBtn">
          <a className="return" onClick={ev => {
            props.history.go(-1);
          }}></a>
          <a className="home" onClick={ev => {
            props.history.push('/');
          }}></a>
        </div>
        {/* 底部 */}
			<div className="bottomBtn">
				<div className="cartIcon"
					onClick={ev => {
						props.history.push('/cart');
					}}>
					<i></i>
					<span>购物车</span>
				</div>
				<div className="btn">
					<a onClick={ev => {
						handle(ev, 'ADD');
					}}>加入购物车</a>
					<a onClick={ev => {
						handle(ev, 'PAY');
					}}>立即购买</a>
				</div>
			</div>
      </section>:null
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    personal: state.personal,
    detail: state.product.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetailDispatch(id) {
      // console.log('-----------|||')
      dispatch(getProductDetail(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);