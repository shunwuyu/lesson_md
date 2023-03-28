<template>
  <h1>{{result}}</h1>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const result = ref('')
new Promise((resolve) => {
      setTimeout(() => {
        result.value = 1000
        resolve()
      }, 3000)
    })

</script>
