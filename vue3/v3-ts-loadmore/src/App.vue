<script setup lang="ts">
import { computed, onMounted} from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './types'
import ColumnList from './components/ColumnList.vue'
import useLoadMore from './hooks/useLoadMore'

const store = useStore<GlobalDataProps>()
const list = computed(() => store.getters.getColumns)
const total = computed(() => store.state.columns.total)
const currentPage = computed(() => store.state.columns.currentPage)
onMounted(() => {
  store.dispatch('fetchColumns', { pageSize: 3 })
})

const { loadMorePage, isLastPage } = useLoadMore(
      'fetchColumns',
  total,
  {
    pageSize: 3,
    currentPage: currentPage.value ? currentPage.value + 1 : 2
  }
)
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="home-page container-md">
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
    <button
      v-if="!isLastPage"
      @click="loadMorePage"
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25 load-more"
    >加载更多</button>
  </div>
</template>

<style>

</style>
