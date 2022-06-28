import React from 'react'
import { connect } from 'react-redux'
import Slider from '@/components/slider/';

 function Recommend(props) {
  const { bannerList } = props 
  return (
    <>
        <Slider bannerList={bannerList}></Slider>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.recommend.bannerList
  }
}

export default connect(mapStateToProps)(Recommend)
