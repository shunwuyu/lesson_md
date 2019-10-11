<!-- 右侧字母方式查看城市组件 -->
<template>
  <ul class="list">
    <li class="item"
    v-for="item of characters"
    :key="item"
    :ref="item"
    @click="handleCharacterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    characters () {
      const characters = []
      for (let i in this.cities) {
        characters.push(i)
      }
      return characters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 性能提升 - 数据更新时获取startY
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleCharacterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 性能提升 - 函数截留
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 100
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.characters.length) {
            this.$emit('change', this.characters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 2rem;
  bottom: 0;
  right: 0;
  width: .4rem;
  font-size: .24rem;
  font-weight: bold;
  .item {
    color: $bgColor;
    line-height: .4rem;
  }
}
</style>
