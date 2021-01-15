<template>
  <button @click="sendMsg()">-</button>
</template>
<script>
// directive 
import { EventBus } from "../utils/event-bus.js";
export default {
  methods: { sendMsg() {
    this.$emit('sendMsg', '来自A页面的消息')
    //  EventBus.$emit("aMsg", '来自A页面的消息'); 
  } }
}
</script>
