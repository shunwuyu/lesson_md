<template>
    <div>
        <h1>内容列表</h1>
        <div>
            <button @click="backward">上一页</button>
            <button @click="forward">下一页</button>
        </div>
        <div v-if="pending">加载中...</div>
        <div class="post-list" v-if="posts !== null">
            <div v-for="post in posts" :key="post.id">
                <div>
                    <img
                        :src="`${apiBaseUrl}/files/${post.file.id}/serve?size=thumbnail`"
                        :alt="post.title"
                    />
                </div>
                <div>
                    <div>
                        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
                    </div>
                    <div>{{ post.content }}</div>
                    <div>
                        - <small>{{ post.user.name }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { PostList } from '~~/types/post.type';
    const {
        public: { apiBaseUrl },
    } = useRuntimeConfig();
    const router = useRouter();
    const {
        query: { page: pageNumber },
    } = useRoute();
    const page = ref(pageNumber ? parseInt(`${pageNumber}`, 10) : 1);

    const updateQuery = () => {
        router.push({ query: { page: page.value } });
    };

    const backward = () => {
        page.value--;
        updateQuery();
    };

    const forward = () => {
        page.value++;
        updateQuery();
    };

    const {
        data: posts,
        pending,
        refresh,
        error,
    } = await useApiFetch<PostList>(() => `posts?page=${page.value}`);

    watch(useRoute(), ({ query }) => {
        if (query.page === undefined) {
            page.value = 1;
        }
    });
  </script>