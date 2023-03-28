<template>
  <Suspense>
      <template #default>
        <async-show />
      </template>
      <template #fallback>
        <h1>Loading !...</h1>
      </template>
  </Suspense>
</template>
<script lang="ts" setup>
import AsyncShow from './components/AsyncShow.vue'

</script>