<template>
  <div>
    <common-header :title="title" :back="true" @goBack="goBack"></common-header>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <alphabet
      :cities="cities"
      @change="change"
      @end="end"></alphabet>
    <transition name="fade">
      <p class="currentIndex" v-if="letter">{{letter}}</p>
    </transition>  
  </div>
</template>

<script>
import CommonHeader from '../../components/header/Header'
import CityList from './components/list/List'
import Alphabet from './components/alphabet/Alphabet'
import { getCityList } from '@/api/city.js'
export default {
  name: 'City',
  components: {
    CommonHeader,
    CityList,
    Alphabet
  },
  data () {
    return {
      title: '城市选择',
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    change(letter) {
      this.letter = letter
    },
    end() {
      setTimeout(() => {
        this.letter = ''
      }, 800);     
    }
  },
  mounted () {
    getCityList().then((res) => {
      if (res.code) {
        this.cities = res.cities
        this.hotCities = res.hotCities
      }
    });
  }
}
</script>

<style lang="stylus" scoped>
  .currentIndex
    display: inline-block;
    background: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    border-radius: 6px;
    color: #ccc;
    opacity: .6;
    font-size:20px;
    margin-left: -25px;
    margin-top: -25px;
    &.fade-enter, &.normal-leave-to
        opacity: 0
    &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s;
</style>
