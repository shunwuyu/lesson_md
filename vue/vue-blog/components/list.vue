<template>
  <div class="list">
    <template v-if="total===0">
      <div class="list-null">空空如也</div>
    </template>
    <template v-else>
      <div>
      fdfadsfasf
      </div>
    </template>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "BaseList",
  data() {
    return {
        loading: false,
        page: 1,
        isLast: false,
    }
  },
  computed: {
    ...mapState('article', [
      'total'
    ])
  }
}
</script>