<template>
  <div>
    <p style="color:red">父组件</p>
    <Child ref='childRef'>
      <!-- <template slot="content" slot-scope="{ msg }"> -->
      <template  v-slot:content="{ msg }">
        <div>{{ msg }}</div>
      </template>
    </Child>
  </div>
</template>

<script lang="ts" setup>
import Child from './Child2.vue'
</script>