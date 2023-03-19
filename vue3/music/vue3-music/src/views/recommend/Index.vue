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
            <owner-send-item
                v-for="item in ownerSendLists"
                :ownerSendItem="item"
                :key="item.id"
            />
        </div>
        <h1 class="subtitle" @click="handleShowMore('/newMusic')">
          <span>最新音乐</span>
          <i class="iconfont icon-right"></i>
        </h1>
        <div class="recommend-latestmusic">
          <latest-music-item
            v-for="(item, index) in latestSongLists"
            :latestMusicItem="item"
            :key="item.id"
            @play="handlePlaySong(index)"
          />
        </div>
        <h1 class="subtitle" @click="handleShowMore('/mvList')">
          <span>推荐MV</span>
          <i class="iconfont icon-right"></i>
        </h1>
        <div class="recommend-mv">
          <div
            v-for="item in recomendMvLists.slice(0, 3)"
            :key="item.id"
            style="flex: 0 0 32%;"
          >
            <mv-item :mvItem="item" />
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
  getBanners,
  getRecommendPlayLists,
  getOwnerSendLists,
  getLatestSongLists,
  getRecomendMvLists
} from '@/service/recommend/index'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Banners from '@/components/banners/Index.vue'
import PlayListItem from '@/components/playlist-item/Index.vue'
import OwnerSendItem from './components/OwnerSendItem.vue'
import LatestMusicItem from './components/LatestMusicItem.vue'
import MvItem from '@/components/mv-item/Index.vue'
const banners = ref<string[]>([])
const playLists = ref<PlayListItem[]>([])
const ownerSendLists = ref<OwnerSendItem[]>([])
const latestSongLists = ref([])
const recomendMvLists = ref([])
const router = useRouter()
const init = async () => {
    const bannersData = await getBanners()
    banners.value = bannersData.banners
    const playListData = await getRecommendPlayLists()
    playLists.value = playListData.result
    const ownerSendListsData = await getOwnerSendLists()
    ownerSendLists.value = ownerSendListsData.result
    const latestSongListsData = await getLatestSongLists()
    latestSongLists.value = latestSongListsData.result
    const recomendMvListsData = await getRecomendMvLists()
    recomendMvLists.value = recomendMvListsData.result
} 
onMounted(() => {
    init()
})
const handleShowMore = (url: string) => {
  router.push(url)
}

const handlePlaySong = (index: number) => {
  console.log('fdfdfdf', index)
}
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