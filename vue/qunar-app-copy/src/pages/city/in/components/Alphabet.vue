<!-- 右侧字母方式查看城市组件 -->
<template>
  <ul class="list">
    <li class="item"
    v-for="item of characters"
    :key="item"
    :ref="item"
    @click="handleCharacterClick"
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
  methods: {
    handleCharacterClick (e) {
      this.$emit('change', e.target.innerText)
    },
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
