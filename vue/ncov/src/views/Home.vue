<template>
  <div>
    <div class="data-statement">
      <div class="statement-title">全国疫情状况</div>
      <div class="update-time">截止 2020-02-04 17:22:44</div>
      <div class="shuoming" @click="handleModal"><span>数据说明</span></div>
    </div>
    <e-summary :total="total" :today="today"></e-summary>
    <e-table :data="table"></e-table>
  </div>
</template>
<script>
// import EAlert from '../components/Alert'
import buildMapData from '../data/map'
import { getNameByPinyin, getPinyinByName } from '../data/zhen'
import ESummary from '../components/Summary.vue'
import ETable from '../components/Table.vue'

export default {
  data () {
    return {
      table: [],
      updateTime: '',
      total: {
        confirm:20520,
        suspect:23214,
        heal:683,
        dead:426,
      },
      today: {
        confirm:3284,
        suspect:1656,
        heal:208,
        dead:65,
      }
    }
  },
  created () {
    let province = this.$route.path.substr(1)
    this.provinceName = getNameByPinyin(province)
    console.log(this.provinceName)
    // console.log(province, '++++');
    const {
      // updateTime,
      // total,
      // map,
      table,
      // chinaDayList,
      // today
    } = buildMapData(this.provinceName)
    console.log(table, '++++++++');
    this.table = table;
  },
  methods: {
    handleModal() {
      
    }
  },
  components: {
    ESummary,
    ETable
  }
}
</script>
<style>

</style>
