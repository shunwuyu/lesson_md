<template >
<div id="app">
  <div class="chart" 
  :style="{height:height,width:width}" >
  </div>
</div>
</template>
<script>
import Axios from 'axios'
import echarts from 'echarts'
require('echarts/theme/macarons')//theme

export default {
  data() {
    return {
      width: '100%',
      height: '350px',

      chartData: {
        orderData: [],
      },
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    Axios.get('/api/orders/halfYearOrderCounts')
      .then(response => {
        // console.log(data.reulst)
        this.chartData.orderData = response.data.result.map(item => {
          return item.count
        })
        this.initChart()
        // console.log(this.chartData.orderData)
      })

    // this.$nextTick(() => {
    //   this.initChart()
    // })
  },
  methods: {
    initChart() {
      // console.log(this.$el);
      // 主题线条比较柔和
      this.chart = echarts.init(document.querySelector('.chart'), 'macarons')//
      this.setOptions(this.chartData)
    },
    setOptions({ orderData } = {}) {
      // console.log(expectedData,) //预期数据    真实数据
      this.chart.setOption({
        // 横坐标
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月'],
          boundaryGap: false, // 两端空白策略
        },
        //网格
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        // 工具栏
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: true
          }
        },
        legend: {
          data: ['orderData']
        },
        series: [
        {
          name: 'orderData',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: orderData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  }
}
</script>>