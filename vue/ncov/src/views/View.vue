<template>
  <div>
    <div class="data-statement">
      <div class="statement-title">{{provinceName}} | 疫情状况</div>
      <div class="update-time">截止 {{updateTime}}</div>
      <div class="shuoming" @click="handleModal"><span>数据说明</span></div>
    </div>
    <e-summary :total="total" ></e-summary>
  </div>
</template>
<script>
import ESummary from '../components/Summary.vue'
import { getNameByPinyin, getPinyinByName } from '../data/zhen'
import ETable from '../components/Table.vue'
export default {
  data () {
    return {
      updateTime: '',
      total: {
        confirm:3284,
        suspect:0,
        heal:19,
        dead:0,
      },
      provinceName: ''
    }
  },
  created () {
    let province = this.$route.path.substr(1);
    // console.log(province)
    this.provinceName = getNameByPinyin(province)
  },
  methods: {
    handleModal () {

    }
  },
  components: {
    ESummary
  }
}
</script>
<style>

</style>
