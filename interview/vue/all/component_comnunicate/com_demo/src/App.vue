<script setup>
// Emit
// import EmitChild from './EmitChild.vue';
// import { onMounted } from 'vue';
// import emitter from './eventBus';

// const onEventHandle = () => {
//   console.log('event triggered');
// }

// onMounted(() => {
//   emitter.on('eventName', onEventHandle);
// })
import { ref, onMounted } from 'vue';
import ComponentA from './ComponentA.vue';

const comA = ref(null)
onMounted(() => {
  // comA.sayHello();
  comA.value.sayHello()
})

</script>

<template>
  <!-- <EmitChild/> -->
  <component-a ref="comA"></component-a>
</template>

<style scoped>
</style>
