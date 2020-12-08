<template>
  <div class="content" v-if="menuActive == 0">
    <scroll :data="movieList" class="wrap_content">
      <div>
        <div class="movie" v-for="movie of movieList" :key="movie.id">
          <div class="avatar">
            <img v-lazy="movie.img" />
          </div>
          <div class="wrap scale-1px">
            <div class="desc">
                <div class="title">
                  <span>{{ movie.nm }}</span>
                  <span class="iconfont icon-shijue3dimax" v-if="movie.version">
              </span>
                </div>
                <div class="score">
                  <span class="suffix">观众评</span>
                  <span class="grade">{{ movie.sc }}</span>
                </div>
                <p class="actor">主演: {{ movie.star }}</p>
                <p class="show-info">{{ movie.showInfo }}</p>
            </div>
            <div class="btn">
              <a href="javascript" class="go">购票</a>
            </div>
          </div>   
        </div>
      </div>
    </scroll>
  </div>

  <div class="content" v-else-if="menuActive == 1">
    <scroll :data="comingList" class="wrap_content">
      <div>
        <div v-for="(group,index) of comingList" :key="index">
          <div class="date">
              <p>{{ group.date }} {{ weeked(group.date) }}</p>
          </div>
          <div class="movie" v-for="coming of group.items" :key="coming.id">
            <div class="avatar">
              <img v-lazy="coming.img" />
              <span class="iconfont icon-shijue3dimax" v-if="coming.version">
              </span>
            </div>
            <div class="wrap scale-1px">
              <div class="desc">
                  <div class="title">
                    <span>{{ coming.nm }}</span>
                  </div>
                  <div class="score">
                    <span class="suffix">观众评</span>
                    <span class="grade">{{ coming.sc }}</span>
                  </div>
                  <p class="actor">主演: {{ coming.star }}</p>
                  <p class="show-info">{{ coming.showInfo }}</p>
              </div>
              <div class="btn">
                <a href="javascript" class="ys">预售</a>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </scroll>
  </div>

</template>

<script>
import { getMoiveList } from '@/api/home.js'
import Scroll from '@/components/scroll/Scroll'
export default {
  name: 'Content',
  props: {
    menuActive: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      movieList: [],
      comingList: []
    }
  },
  mounted() {
    getMoiveList().then((res) => {
      if (res.code) {
        this.movieList = res.movieList
        this.comingList = this.parseComingList(res.comingList)
        console.log(this.comingList);
      }
    })
  },
  components: {
    Scroll
  },
	methods: {
    weeked(date) {
      let weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      let myDate = new Date(Date.parse(date));  
      return weekDay[myDate.getDay()];
    },
    parseComingList(comingList) {
      let map = {};
      comingList.forEach((item, index) => {
        let rt = item.rt
        if (!map[rt]) {
          map[rt] = {
            items: [],
            date: rt
          }
        }        
        map[rt].items.push(item)
      });
      let arr = [];
      for (let key in map) {
        arr.push(map[key]);
      }
      return arr;
    }
	}
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/mixins.styl'
  .content
    position: fixed
    width: 100%
    top: 96px
    bottom: 56px
    .wrap_content
      overflow: hidden
      height: 100%
      .date
        padding: 12px 15px 0;
        margin: 0;
        font-size: 14px;
        color: #333;
      .movie
        display: flex
        padding-left: 15px;
        padding-right: 15px;
        background-color: #fff;
        .avatar
          flex: 0 0 64px;
          height: 90px;
          margin-top: 12px;
          img
            width: 64px;
            height: 90px;
        .wrap
          flex: 1;
          margin-left: 12px
          position: relative;
          .desc
            width: 200px
            padding-top: 10px;
            padding-bottom: 6px;
            .title
              height: 24px;
              margin-bottom: 7px;
              line-height: 24px;
              overflow: hidden;
              .icon-shijue3dimax
                font-size:40px
                vertical-align: middle
                color: #3c9fe6;
            .score
              font-size: 13px;
              color: #666;
              .grade
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
            .actor
              font-size: 13px;
              color: #666;
              margin-top: 6px;
              line-height: 15px;
              no-wrap()
            .show-info
              margin-top: 6px;
              line-height: 15px;
              font-size: 13px;
              color: #666;
          .btn
            font-size: 12px;
            position: absolute;
            right: 10px;
            top: 0;
            bottom: 0;
            height: 27px;
            margin: auto;
            .go
              display:inline-block;
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color: #f03d37;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
              text-decoration: none;
            .ys
              display:inline-block;
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color: #3c9fe6;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
              text-decoration: none;  

</style>
