<template>
    <div class="column-detail-page w-690">
        <div 
        v-if="column"
        class="column-info row mb-4 border-bottom pb-4 align-items-center">
            <div class="col-3 text-center">

            </div>
            <div class="col-9">
                <h4>{{column.title}}</h4>
                <p class="text-muted">
                    {{column.description}}
                </p>
            </div>
            
        </div>
        <post-list :list="postList" />
        <button 
            v-if="!isLastPage"
            @click="loadMorePage"
            class="btn btn-outline-primary mx-auto btn-block"
        >加载更多</button>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ColumnProps } from '../types'
import PostList from '../components/PostList.vue'
import useLoadMore from '../hooks/useLoadMore'

const store = useStore();
type ColumnIdProps = string | undefined; // 联合类型

const route = useRoute()
const currentId = route.params.id as ColumnIdProps 
// console.log(currentId)
const column = computed(() => {
    console.log('//////')
    const selecteColumn = 
        store.getters.getColumnById(currentId) as ColumnProps | undefined 
    return selecteColumn
})
// home -> columns -> posts-> post
const postList = computed(() => store.getters.getPostsByCid(currentId))
const loaded = reactive({
    currentPage: 0,
    total: 0
})
const total = computed(() => loaded.total)

const params = {
    columnId: currentId,
    pageSize: 3,
    currentPage: loaded.currentPage ? loaded.currentPage + 1 : 2
}

const { 
    loadMorePage,
    isLastPage
} = useLoadMore('fetchPosts', total, params)

watch(store.state.posts.loadedColumns, () => {
    const { currentPage, total} = 
        store.getters.getLoadedPost(currentId)
    loaded.currentPage = currentPage
    loaded.total = total
})
onMounted(() => {
    store.dispatch('fetchColumn', currentId)
    store.dispatch('fetchPosts', { columnId: currentId, pageSize: 3 })
})
</script>

<style scoped>

</style>