import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination} from 'swiper/core'
// import "swiper/css";
// import "swiper/css/pagination";
import Cart from './components/cart'
function App() {
  useEffect(() => {
    SwiperCore.use([Autoplay, Pagination]) 
  })
  return (
    <div className="App">
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      initialSlide={1} // 初始化显示哪一个
      loop={true} // 是否循环
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      threshold={40}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}

    {/* <Swiper 
      pagination={true} 
      modules={[Pagination]} 
      className="mySwiper"
      autoplay={{delay:2500}}
    >
      <SwiperSlide><img src="https://img.36krcdn.com/20220615/v2_43348099019e497f831b961f2760566d_img_jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://img.36krcdn.com/20220615/v2_8d9e2a5f888b42d18a5258c616527ea4_img_png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://img.36krcdn.com/20220606/v2_03a924f259a1443a8f2239371196c3f4_img_png" alt="" /></SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper> */}


      <Cart />
    </div>
  )
}

export default App
