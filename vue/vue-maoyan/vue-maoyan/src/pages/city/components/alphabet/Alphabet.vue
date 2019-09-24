<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,index) of letters"
      :key="item"
      :data-index="index"
      @touchstart.stop.prevent="onTouchStart" 
      @touchmove.stop.prevent="onTouchMove" 
      @touchend="onTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touch: {},
      currentIndex: 0
    }
  },
  methods: {
    onTouchStart(e) {
      this.touch.initiated = true
      let anchorIndex = e.target.getAttribute('data-index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.currentIndex = anchorIndex;
      this.$emit('change', this.letters[this.currentIndex])
    },
    onTouchMove(e) {
      if (!this.touch.initiated) {
        return
      }
      let firstTouch = e.touches[0];
      this.touch.y2 = firstTouch.pageY;
      let delta = (this.touch.y2 - this.touch.y1) / 20 | 0;
      let index = parseInt(this.currentIndex) + delta;
      this.$emit('change', this.letters[index])
    },
    onTouchEnd(e) {
      this.touch.initiated = false
      this.$emit('end')   
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 20px
    right: 12px
    bottom: 0
    width: 12px
    .item
      height: 20px
      line-height: 20px
      text-align: center
      color: $bgColor
</style>
