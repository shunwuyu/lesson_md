<template>
  <div class="chart" />
</template>

<script>
import Axios from 'axios'
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'
export default {
  data() {
    return {
      chart: null,
      keys:[],
      chartData: {
        orderData:[]
      }
    }
  },
  mounted() {
    Axios.get('/api/orders/halfYearOrderCounts')
    .then(response => {
      // console.log(data.reulst)
      this.chartData.orderData = response.data.result.map(item => {
        return {
          name: item._id,
          value: item.count
        }
      })
      this.keys = this.chartData.orderData.map(item => {
        // console.log(item)
        return item.name
      })
      // console.log(this.chartData.orderData)
      this.initChart()
      // console.log(this.chartData.orderData)
    })
    // this.$nextTick(() => {
    //   this.initChart()
    // })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      // console.log(this.keys);
      this.chart = echarts.init(document.querySelector('.chart'), 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'item', //移到每个上面时
          formatter: '{a} <br/>{b} : {c} ({d}%)'  // 几部分
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: this.keys
        },
        series: [
          {
            name: '月销售额',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: this.chartData.orderData,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
<style>
.chart {
  width: 100%;
  height: 350px;
}
</style>