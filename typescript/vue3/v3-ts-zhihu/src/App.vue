<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store/types'
import GlobalHeader from './components/GlobalHeader.vue'

const store = useStore<GlobalDataProps>()

const currentUser = computed(() => store.state.user)
</script>

<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser"></global-header>
  </div>
  <router-view/>
</template>

<style>

</style>
