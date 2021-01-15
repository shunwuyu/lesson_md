<template>
  <div class="list">
    <scroll class="wrap_content" :data="cities" ref="scroll">
      <div>
        <div class="area">
          <div class="title scale-1px">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{ city }}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title scale-1px">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="item of hot"
              :key="item.id"
              @click="setCurrentCity(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div
          class="area"
          v-for="(item, key) of cities"
          :key="key"
          :ref="key"
        >
          <div class="title scale-1px">{{key}}</div>
          <div class="item-list">
            <div
              class="item scale-1px"
              v-for="innerItem of item"
              :key="innerItem.id"
              @click="setCurrentCity(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/Scroll'
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'List',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapGetters([
      'city'
    ])
  },
  methods: {
    ...mapMutations([
      'setCity'
    ]),
    setCurrentCity(city) {
      this.setCity(city);
      this.$router.push('/home');
    }
  },
  components: {
    Scroll
  },
  watch: {
    letter () {
      if (this.letter) {
        this.$refs.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
  .list
    width: 100%
    top: 50px
    bottom: 0
    left: 0
    right: 0
    position: fixed
    .wrap_content
      overflow: hidden
      height: 100%      
      .title
        line-height: 27px
        background: #eee
        padding-left: 10px
        color: #666
        font-size: 12px
      .button-list
        overflow: hidden
        padding: 6px 10px 6px 6px;
        .button-wrapper
          float: left
          width: 33.33%
          .button
            margin: 4px
            padding: 4px 0
            text-align: center
            border: 1px solid #ccc
            border-radius: 4px
      .item-list
        .item
          line-height: 32px
          padding-left: 12px
</style>
