<script setup>
import { reactive } from 'vue'
import { useRouter, RouterView, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const state = reactive({
  transitionName: 'slide-left'
})
router.beforeEach((to, from) => {
  // console.log(to, from);
  if (to.meta.index > from.meta.index) {
    state.transitionName = 'slide-left' // 向左滑动
  } else if (to.meta.index < from.meta.index) {
    // 由次级到主级
    state.transitionName = 'slide-right'
  } else {
    state.transitionName = ''   // 同级无过渡效果
  }
})
</script>

<template>
    
    <!-- <router-view v-if="route.meta.keepAlive" v-slot="{ Component }">
      <keep-alive>
        <transition :name="state.transitionName">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
     -->
    <router-view  v-slot="{ Component }">
      <transition :name="state.transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<style lang="stylus" scoped>

// .router-view
//     width 100%
//     height auto
//     position fixed
//     top 0
//     bottom 0
//     left 0
//     margin 0 auto
//     -webkit-overflow-scrolling touch
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    height: 100%;
    /* will-change 旨在用作尝试处理现有的性能问题的最后手段 提前告知 */
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>
