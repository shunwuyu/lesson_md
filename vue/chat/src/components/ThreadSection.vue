<template>
<div class="thread-section">
    <div class="thread-count">
      <span>
      </span>
    </div>
    <ul class="thread-list">
      <thread
        v-for="thread in threads"
        :key="thread.id"
        :active="thread.id === currentThread.id"
        :thread="thread"
        @switch-thread="switchThread"
        >
      </thread>
    </ul>
  </div>
</template>
<script>
import Thread from './Thread.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { Thread },
  computed: mapGetters(['threads', 'currentThread']),
  methods: mapActions(['switchThread'])
}
</script>
<style>

</style>
