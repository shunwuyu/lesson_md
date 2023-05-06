<template>
  <div>
    <p>msg：{{msg}}</p>
    <p>list：{{list}}</p>
    <button @click="onChangeMsg">改变msg</button>
  </div>
</template>

<script setup lang="ts">
// defineProps<{
//   msg: string,
//   list: number[]
// }>()
type Props = {
  msg?: string,
  list?: number[]
}
withDefaults(defineProps<Props>(), {
  msg: '张麻子',
  list: () => [4, 5, 6]
})

const emits = defineEmits(['changeMsg'])
const onChangeMsg = () => {
emits('changeMsg','黄四郎')
}
</script>