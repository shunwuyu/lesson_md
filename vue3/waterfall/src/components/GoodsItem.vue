<template>
    <div class="item">
        <div>
          <img :src="goods.pic" alt="">
        </div>
        <div>
          {{goods.title}}
        </div>
    </div>
</template>
<script setup>
defineProps({
    goods: {
        type: Object,
        default: {}
    }
})
</script>
<style>
.item {
    background: #ddd;
    margin-bottom: .13333rem;
}
</style>