<template>
    <form class="search" @submit.prevent="handleSubmit">
        <input
            type="text"
            v-model="movieTitle"
        />
        <input type="submit" value="SEARCH" />
    </form>
</template>
<script setup>
import { defineProps, ref , defineEmits } from 'vue';
const props = defineProps({
    search: String
})
const emit = defineEmits(["search"])
const movieTitle = ref(props.search)
// function handleChange(event) 
// {
//     movieTitle.value = event.target.value
// }
function handleSubmit(event) {
    event.preventDefault();
    emit('search', movieTitle.value);
}
</script>