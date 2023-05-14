<template>
    <div class="wrap">
        <Child />
    </div>
</template>
<script setup>
import Child from './Child.vue';
</script>
<style lang="stylus">
.wrap /deep/ .box{
    background: green !important;
    font-size: 20px;
}
</style>