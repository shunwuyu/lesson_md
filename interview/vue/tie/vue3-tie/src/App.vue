<template>
  <div>
    <button @click="showModal = true">打开弹窗</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <button @click="showModal = false">关闭弹窗</button>
        <p>这是弹窗内容</p>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid black;
}
</style>