<template>
    <div class="recommend">
        <Banners v-if="banners.length" :banners="banners" />
        <h1 class="subtitle" @click="handleShowMore('/playList')">
            <span>推荐歌单</span>
            <i class="iconfont icon-right"></i>
        </h1>
        <div class="recommend-playlist">
            <play-list-item
                v-for="item in playLists"
                :playListItem="item"
                :key="item.id"
            />
        </div>
        <h1 class="subtitle">
            <span>独家放送</span>
            <i class="iconfont icon-right"></i>
        </h1>
        <div class="recommend-ownersend">
            <!-- <owner-send-item
                v-for="item in ownerSendLists"
                :ownerSendItem="item"
                :key="item.id"
            /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
  getBanners,
  getRecommendPlayLists
} from '@/service/recommend/index'
import { ref, onMounted } from 'vue'
import Banners from '@/components/banners/Index.vue'
import PlayListItem from '@/components/playlist-item/Index.vue'
const banners = ref<string[]>([])
const playLists = ref<PlayListItem[]>([])

const init = async () => {
    const bannersData = await getBanners()
    banners.value = bannersData.banners
    const playListData = await getRecommendPlayLists()
    playLists.value = playListData.result

}
onMounted(() => {
    init()
})
</script>

<style lang="stylus" scoped>
.recommend {
  .subtitle {
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    cursor: pointer;
    .icon-right {
      font-weight: initial;
    }
  }
  .recommend-playlist,
  .recommend-ownersend,
  .recommend-latestmusic,
  .recommend-mv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .recommend-ownersend {
    margin-bottom: 30px;
  }
}
</style>