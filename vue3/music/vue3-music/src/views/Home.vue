<template>
    <div class="home">
        <header class="header">
        <Header/>
        </header>
        <aside>
            <SideBar/>
        </aside>
        <main class="main" :class="{cover : isCover}">
            <div class="main-page" id="mainPage" ref="mainRef">
                <router-view />
            </div>

        </main>
        <!-- <router-view name="video"/> -->
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Header from '@/layout/header/Header.vue'
import SideBar from '@/layout/SideBar.vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
// const playerIsShow = computed<boolean>(() => playerStore.currentIndex === -1)
const isCover = computed(() => {
      return route.meta.isCover
})


</script>

<style lang="stylus"  scoped>
@import "../assets/css/variables.styl"
.main {
    position: fixed;
    top: $header-height;
    right: 0;
    bottom: $player-height;
    left: $sidebar-width;
    z-index: -1;
    padding-left: 30px;
    box-sizing: border-box;
    .main-page {
      height: 100%;
      padding-top: 60px;
      padding-right: 20px;
      overflow-y: scroll;
      box-sizing: border-box;
    }
    &.cover {
      padding-left: 0;
      .main-page {
        padding-top: 0;
        padding-right: 0;
      }
    }
  }
</style>