<template>
    <div id="home_page">
        <NavigationBar v-if="home_content">
        </NavigationBar>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import NavigationBar from '@/components/home_page/navigation_bar.vue'

export default {
  computed: {
    ...mapState({
    home_content: state =>    state.home.home_content
    })
  },
  components: {
    NavigationBar
  }
}
</script>
<style>
  
</style>