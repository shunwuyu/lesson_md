<template>
    <div class="movie">
        <h2>{{ movie.Title }}</h2>
        <div>
        <img width="200" :alt="altText" :src="movie.Poster" />
        </div>
        <p>{{ movie.Year }}</p>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    movie: Object
})
const altText = computed(() => `The movie titled: ${props.movie.Title}`)

</script>
