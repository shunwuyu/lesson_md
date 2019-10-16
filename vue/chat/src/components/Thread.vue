<template>
  <li
    class="thread-list-item"
    @click="$emit('switch-thread', thread.id)"
    :class="{ active: active }"
    >
    <h5 class="thread-name">{{ thread.name }}</h5>
    <div class="thread-time">
      {{ thread.lastMessage.timestamp | time}}
    </div>
    <div class="thread-last-message">
      {{ thread.lastMessage.text }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    thread: Object,
    active: Boolean
  }
}
</script>