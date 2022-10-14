<template>
    <div>
        <a-card>
            <a-input-search size="large" class="search" @search="onSearch" placeholder="搜索仓库">
                <template #enterButton>
                <a-button style="width: 100px; height: 48px" class="search_btn" type="primary">
                    <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg" alt="" />
                </a-button>
                </template>
            </a-input-search>
        </a-card>
        <a-divider class="line" />
        <a-row :gutter="24">
            <a-col :span="12">
                <a-card :bordered="false">
                <!-- <DataOverview /> -->
                </a-card>
            </a-col>
            <a-col :span="12">
                <a-card :bordered="false">
                    <trading-history :loading="loading" />
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '../../store/modules/home'
import TradingHistory from './components/TradingHistory.vue';
import { ref, onMounted } from 'vue'
 const store = useHomeStore();
const loading = ref(false);
onMounted(async () => {
    loading.value = true;
    let info = await store.fetchInfo();
    console.log(info);
    loading.value = false;
});
const onSearch = () => {};
</script>

<style lang="less" scoped>
.search {
    & :deep(.ant-input) {
      height: 48px;
    }
}
</style>