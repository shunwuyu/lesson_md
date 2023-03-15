<template>
    <div>
        <header>
            <div class="search_wrapper">
                <van-swipe class="search-swipe" vertical :autoplay="3000" indicator-color="white">
                    <van-swipe-item>春招</van-swipe-item>
                    <van-swipe-item>美团比试</van-swipe-item>
                    <van-swipe-item>百度比试</van-swipe-item>
                    <van-swipe-item>华为</van-swipe-item>
                </van-swipe>
            </div>
        </header>
    </div>
</template>

<script setup>

</script>

<style>
body {
    background-color: gray;
}
header {
    padding: 30px 18px;
}
.search_wrapper {
    width: 20rem;
    line-height:40px;
    height: 40px;
    border-radius: 40px;
    padding-left: 40px;
    background-color: white;
    display: flex;
    align-items: center;
}
.search-swipe {
    height: 30px;
    line-height: 30px;
    color: #333;
    font-size: 14px;
}

</style>