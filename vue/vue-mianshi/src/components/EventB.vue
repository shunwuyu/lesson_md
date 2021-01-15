<template>
  <p>{{msg}} {{message}}</p>

</template>
<script>
// directive 
import { EventBus } from "../utils/event-bus.js";
export default {
  data(){ return { msg: '' } },
  props: ['message'],
  mounted() { EventBus.$on("aMsg", (msg) => {this.msg = msg }); }
}
</script>
