<template>
  <div class="switch-img-box" id="ec-slide-box" :style="{width:swidth + 'px'}">
    <div class="switch-img-type switch-img-left">
      <ul :style="{'width':ulWidth,'transform':'translate3d(-'+(listWidth*(nowIndex))+'%,0,0)','transition-timing-function':slideChange,'transition': 'all .4s'}">
        <li v-for="(li,index) in list" :style="{'width':listWidth+'%'}"
        v-bind:key="index">
          <a :href="li.href?li.href:'javascript:;'">
              <img :src="li.src" class="slider-img"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="switch-option" v-if="option">
        <div>
            <!-- <span v-for="(li,index) in list" v-bind:key="index"></span> -->
            <span v-for="(li,index) in list" 
    :key="index"
    :class="{'active':index===nowIndex}"></span>
        </div>
    </div> 
    
  </div>
</template>
<script>
export default {
  name: "EcSlide",
  props: ['list', 'autoplay', 'type', 'time', 'sildetype', 'arrowurl', 'swidth',
  'arrowsize', 'option', 'direction'],
  data () {
    return {
      slideChange: '',
      timer: null,
      nowIndex: 0
    }
  },
  mounted() {
    this.slideChange = this.sildetype || 'ease';
    if (this.autoplay) {
        this.autoSwitch();
    }
  },
  methods: {
    autoSwitch() {
      let time = this.time || 4000;
      this.timer = setInterval(() => {
        this.switchDo();
      }, time);
    },
    switchDo () {
      clearInterval(this.timer);
      if (this.nowIndex === this.list.length-1) {
        this.nowIndex = 0;
      }
      else{
        this.nowIndex++;
      }
      if (this.autoplay) {
          this.autoSwitch();
      }
    }
  },
  computed: {
    ulWidth() {
      return (this.list.length) + "00%";
    },
    listWidth: function () {
      return 100 / (this.list.length)
    }
  }
}
</script>
<style scope lang="stylus">
.switch-img-box
  width 100%
  height 100%
  position relative
  touch-action none
.switch-img-type
  position relative
  overflow hidden
  width 100%
  height 100%
  &.switch-img-left
    li
      display inline-block
      font-size 0
  ul
    font-size 0
    li
      text-align center
      img
        vertical-align middle
        max-width 100%
        max-height 100%
.switch-option
  position absolute
  font-size 0
  text-align center
  width 100%
  z-index 5
  display table
  height 100%
  right 10px
  margin auto
  bottom 0
  div
    display table-cell
    vertical-align bottom
  span
    border-radius 100%
    margin 0 5px
    background #fff
    display inline-block
    width 10px
    height 10px
    margin 5px
    background-color #ccc
    &.active
      background-color white
            
</style>