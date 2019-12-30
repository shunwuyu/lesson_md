<template>
  <div id="app">
    <div class="user">
      <div class="back" @click="back">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="switches-wrapper">
        <switches @switch="switchItem" :switches="switches" :currentIndex="currentIndex"></switches>
      </div>
      <!-- <div class="sequence-play" @click="sequence">
        <i class="iconfont icon-bofangicon"></i>
        <span class="text">播放全部</span>
        <span class="count">(共10首)</span>
      </div> -->
      <div class="list-wrapper" ref="listWrapper">
        <scroll ref="favoriteList" class="list-scroll" :data="favoriteList" v-if="currentIndex === 0">
          <div class="list-inner">
            <song-list @select="selectSong" :songs="favoriteList"></song-list>
          </div>
        </scroll>
        <scroll ref="playList" class="list-scroll" v-if="currentIndex === 1" :data="playHistory">
          <div class="list-inner">
            <song-list @select="selectSong" :songs="playHistory"></song-list>
          </div>
        </scroll>
      </div>
      <div class="no-result-wrapper" v-show="noResult">
        <no-result :title="noResultDesc"></no-result>
      </div>
    </div>
  </div>
</template>

<script>
import Switches from './components/switches/switches'
import SongList from './components/song-list/song-list'
import noResult from './components/no-result/no-result'
export default {
  name: 'app',
  data () {
    return {
      noResult: true,
      currentIndex: 0,
      switches: [
        {name: '我的收藏'},
        {name: '最近播放'}
      ],
      playHistory: [
        {
         id: 222,
         name: '我来自何芳' 
        },
        {
         id: 222,
         name: '我来自何芳' 
        },
        {
         id: 222,
         name: '我来自何芳' 
        },
        {
         id: 222,
         name: '我来自何芳' 
        },
        {
         id: 222,
         name: '我来自何芳' 
        }
      ],
      favoriteList: [
        {
         id: 111,
         name: '吻别' 
        },
        {
         id: 111,
         name: '吻别' 
        },
        {
         id: 111,
         name: '吻别' 
        },
        {
         id: 111,
         name: '吻别' 
        },
        {
         id: 111,
         name: '吻别' 
        }
      ]
    }
  },
  computed: {
    noResultDesc () {
      if (this.currentIndex === 0) {
        return '去寻找属于你自己最爱的MUSIC吧~'
      } else {
        return '你还没有听过歌呀~'
      }
    }
  },
  methods: {
    selectSong (song) {
      this.insertSong(song)
    },

    back() {
      // console.log('返回上一页');
    },
    switchItem (index) {
      this.currentIndex = index
    },
    sequence () {

    }
  },
  components: {
    switches: Switches,
    'song-list': SongList,
    'no-result': noResult
  }
}
</script>

<style lang="stylus">
@import "./common/styl/variable";

* 
  margin 0
  padding 0
  border 0
  font-size 100%
  font-weight 400
  vertical-align baseline
ul, li
  list-style none

@font-face {
  font-family: 'FontAwesome';
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot');
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff2') format('woff2'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff') format('woff'),
    url('./common/font-awesome/fonts/fontawesome-webfont.ttf') format('truetype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.user
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 100
  background $color-background
  .back
    position absolute
    top 0
    left 4px
    .fa
      font-family 'FontAwesome'
      &.fa-angle-left
        padding 5px 10px
        font-size 30px
        color #fff
        &:before
          content: "\F104";
  .text
    position absolute
    left 38px
    line-height 44px
    font-size 16px
    text-overflow ellipsis
    white-space nowrap
    color white
  .sequence-play
    position absolute
    top 44px
    display flex
    align-items center
    width 100%
    height 40px
    padding-left 16px
    border-bottom 1px solid rgb(228, 228, 228)
    .text
      font-size $font-size-medium-x
  .switches-wrapper
    display flex
    align-items center
    background $color-theme
    height 44px

</style>
