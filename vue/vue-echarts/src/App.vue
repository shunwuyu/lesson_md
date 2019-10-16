<template>
  <div id="app">
    <front-skill />
    <first-echarts />
  </div>
</template>

<script>
import FrontSkill from './components/FrontSkill'
import FirstEcharts from './components/FirstEcharts'
export default {
  name: 'App',
  components: {
    FrontSkill,
    FirstEcharts
  }
}
</script>

<style>
* {
  margin: 0;padding: 0;
}
</style>
