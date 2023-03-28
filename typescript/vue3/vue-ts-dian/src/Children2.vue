<template>
  <div>
    <p>msg：{{msg}}</p>
    <button @click="onChangeMsg">改变msg</button>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue'

const msg = inject<Ref<string>>('msg',ref('hello啊！'))
const onChangeMsg = () => {
  msg.value = 'shuge'
}
</script>