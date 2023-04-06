<template>
    <div v-if="currentPost" class="post-detail-page w-690">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">首页</a></li>
                <li class="breadcrumb-item"><a :href="`/column/${currentPost.column}`">专栏首页</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ currentPost.title }}</li>
            </ol>
        </nav>
        <article class="mb-5 pb-3">
            <img :src="currentImageUrl" alt="currentPost.title" class="rounded-lg img-fluid my-4" v-if="currentImageUrl">
      <h2 class="mb-4">{{ currentPost.title }}</h2>
      <div class="user-profile-component border-top border-bottom py-3 mb-5 align-items-center row g-0">
        <div class="col">
          <!-- <user-profile :user="currentPost.author" v-if="typeof currentPost.author === 'object'"></user-profile> -->
        </div>
        <span class="text-muted col text-right font-italic">发表于：{{ currentPost.createdAt }}</span>
      </div>
      <div v-html="currentHTML"></div>
      <!-- <div v-if="showEditArea" class="btn-group mt-5">
        <router-link
          type="button"
          class="btn btn-success"
          :to="{ name: 'create', query: { id: currentPost._id }}"
        >编辑</router-link>
        <button type="button" class="btn btn-danger" @click.prevent="modalIsVisible = true">删除</button>
      </div> -->
    </article>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import MarkdownIt from 'markdown-it'
import { GlobalDataProps, PostProps, ImageProps } from '../types'
const store = useStore<GlobalDataProps>()
const router = useRouter()
const route = useRoute()
const currentId = route.params.id
const md = new MarkdownIt()
const modalIsVisible = ref(false)
onMounted(() => {
    store.dispatch('fetchPost', currentId)
})
const currentPost = computed<PostProps>(() => store.getters.getCurrentPost(currentId))
    const currentImageUrl = computed(() => {
      if (currentPost.value && currentPost.value.image) {
        const { image } = currentPost.value
        return (image as ImageProps).url + '?x-oss-process=image/resize,w_850'
      } else {
        return null
      }
    })
    const currentHTML = computed(() => {
      const { content, isHTML } = currentPost.value
      if (currentPost.value && content) {
        return isHTML ? content : md.render(content)
      }
    })

</script>

<style scoped>
.w-690 {
  width: 690px;
  margin: 0 auto;
}
.rounded-lg {
  border-radius: .3rem!important;
}
.font-italic {
  font-style: italic!important;
}
</style>