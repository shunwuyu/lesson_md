<template>
  <div>
    <h2>对比</h2>
    <img src="https://www.baidu.com/img/baidu_resultlogo@2.png" alt="">
    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">
    <hr>
    当前进度{{ progress }} %
    <svg
      style="transform: rotate(-90deg)"
      :width="width"
      :height="width"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        :r="(width-lineWidth)/2"
        :cy="width/2"
        :cx="width/2"
        :stroke-width="lineWidth"
        :stroke="backgroundColor"
        fill="none"
      />
      <!-- 
        stroke-dashoffset: 0 ~ 2*Pi*r 逆时针
        2*Pi*r ～ 0 顺时针
      -->
      <circle
        ref="$bar"
        class="bar"
        :r="(width-lineWidth)/2"
        :cy="width/2"
        :cx="width/2"
        :stroke="barColor"
        :stroke-width="lineWidth"
        :stroke-linecap="isRound ? 'round' : 'square'"
        :stroke-dasharray="(width-lineWidth)*3.14"
        :stroke-dashoffset="(width - lineWidth) * 3.14 * (100 - progress) / 100"
        fill="none"
      />
    </svg>
    <h2>圆演示</h2>
    <svg width="50" height="50">
      <circle r="24" cy="25" cx="25" stroke="red" stroke-width="1" fill="none" />
    </svg>
    <h2>stroke-dasharray / stroke-dashoffset 演示</h2>
    <svg width="300" height="200">

      <!-- 0 ~ 400 -->
      <rect
        x="10"
        y="10"
        width="100"
        height="100"
        stroke="red"
        stroke-dasharray="400"
        stroke-dashoffset="10"
        stroke-width="2"
        fill="green"
      />
    </svg>
    <svg :width="width"
      :height="width">
      <circle
        :r="(width-lineWidth)/2"
        :cy="width/2"
        :cx="width/2"
        :stroke="barColor"
        :stroke-width="lineWidth"
        :stroke-dasharray="10"
        fill="none"
      />
    </svg>
  </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval } from 'timers';
export default {
  props: {},
  data() {
    return {
      width: 200,
      lineWidth: 10,
      isAnimation: true,
      isRound: true,
      backgroundColor: "rgb(229, 233, 242)",
      barColor: "rgb(32, 160, 255)",
      progress: 0
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.progress === 100) {
        clearInterval(this.interval)
      } else {
        this.progress += 10
      }
    }, 1000)
  }
};
</script>
<style scoped>
.bar {
  transition: stroke-dashoffset .5s;
}
</style>
