<!-- 景点详情页 -->
<template>
  <div class="datail-page">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      pageId: 0
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data[this.pageId].sightName
        this.bannerImg = data[this.pageId].bannerImg
        this.gallaryImgs = data[this.pageId].gallaryImgs
        this.list = data[this.pageId].priceType
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    this.getDetailInfo()
    this.pageId = Number(this.$route.params.id) - 1
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 20rem;
}
</style>
