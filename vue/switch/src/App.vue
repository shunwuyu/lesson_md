<template>
  <div id="app">
    <div class="moor-item">
      <label>Switch: </label>
      <moor-switch
      v-model="lightSwitch">开关(开):</moor-switch>
      <my-switch
      v-model="lightSwitch">开关(开):</my-switch>
    </div>
  </div>
</template>

<script>
import Switch from './packages/switch/moor-switch.vue'
export default {
  name: 'app',
  data () {
    return {
      lightSwitch: false
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  },
  components: {
    'my-switch': Switch
  }
}
</script>

<style>
.moor-select, .moor-btn, .moor-switch, .moor-input {
  margin: 10px 6px;
}
.moor-item {
  display: flex;
  align-items: center;
}
.moor-item label {
  width: 100px;
  display: inline-block;
}
</style>
