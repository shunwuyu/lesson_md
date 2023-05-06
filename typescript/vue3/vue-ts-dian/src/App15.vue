<template>
    <div>
      <Children :msg="msg" :list="list"  @changeMsg="changeMsg"></Children>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Children from './Children.vue'
const msg = ref('hello 啊，树哥')
// const list = reactive<number[]>([1, 2, 3])
const changeMsg = (v: string) => {
  msg.value = v
}
</script>

<style scoped>

</style>