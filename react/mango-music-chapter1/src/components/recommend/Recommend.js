import React from "react"
import "./recommend.styl"
import LazyLoad, { forceCheck } from "react-lazyload"
import {CODE_SUCCESS} from "@/api/config"
import Loading from "@/common/loading/Loading"
import Scroll from "@/common/scroll/Scroll"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import {getCarousel, getNewAlbum} from "@/api/recommend"
import * as AlbumModel from "@/model/album"

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sliderList: [],
      newAlbums: [],
      refreshScroll: false
    };
  } 
  componentDidMount() {
    getCarousel().then((res) => {
      console.log("获取轮播：");
      console.log(res);
      if (res) {
        if (res.code === CODE_SUCCESS) {
          this.setState({
            // loading: false,
            sliderList: res.data.slider
        }, () => {
          if(!this.sliderSwiper) {
            // console.log('-----------')
                //初始化轮播图
                this.sliderSwiper = new Swiper(".slider-container", {
                    loop: true,
                    autoplay: {
                      delay: 3000
                    },
                    // autoplayDisableOnInteraction: false,
                    pagination: {
                      el: '.swiper-pagination',
                      type: 'bullets',
                    },
                });
                console.log(this.sliderSwiper)
            }
          });
        }
      }
    });
    getNewAlbum().then((res) => {
      console.log("获取最新专辑：");
      if (res) {
          console.log(res);
          if (res.code === CODE_SUCCESS) {
              //根据发布时间降序排列
              let albumList = res.albumlib.data.list;
              albumList.sort((a, b) => {
                  return new Date(b.public_time).getTime() - new Date(a.public_time).getTime();
              });
              this.setState({
                  loading: false,
                  newAlbums: albumList
              }, () => {
                  //刷新scroll
                  this.setState({refreshScroll:true});
              });
          }
      }
    });
  }
  toLink(linkUrl) {
    /*使用闭包把参数变为局部变量使用*/
    return () => {
        window.location.href = linkUrl;
    };
  }
  render() {
    let albums = this.state.newAlbums.map(item => {
      //通过函数创建专辑对象
      let album = AlbumModel.createAlbumByList(item);
      return (
          <div className="album-wrapper" key={album.mId}>
              <div className="left">
                  <LazyLoad height={60}>
                      <img src={album.img} width="100%" height="100%" alt={album.name}/>
                  </LazyLoad>
              </div>
              <div className="right">
                  <div className="album-name">
                      {album.name}
                  </div>
                  <div className="singer-name">
                      {album.singer}
                  </div>
                  <div className="public—time">
                      {album.publicTime}
                  </div>
              </div>
          </div>
      );
  });
      return (
          <div className="music-recommend">
            <Scroll refresh={this.state.refreshScroll}
              onScroll={(e) => {
                forceCheck();
              }}>
              <div>
                <div className="slider-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.sliderList.map(slider => {
                                    return (
                                        <div className="swiper-slide" key={slider.id}>
                                            <a className="slider-nav" onClick={this.toLink(slider.linkUrl)}>
                                                <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                                            </a>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="album-container">
                        <h1 className="title">最新专辑</h1>
                        <div className="album-list">
                            {albums}
                        </div>
                    </div>
              </div>
            </Scroll>
            <Loading title="正在加载..." show={this.state.loading}/>
          </div>
      );
  }
}

export default Recommend