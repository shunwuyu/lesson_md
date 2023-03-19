<template>
    <div class="yx-backTop"
        :style="{right:`${right}px`, bottom:`${bottom}px`}"
        @click="toTop"
        v-show="backTop"
    >
        <slot>
        </slot>
    </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
const backTop = ref(false) 
const right = ref(0)
const bottom = ref(0)
const props = defineProps({
    showHeight: {
        type: Number,
        value: 0
    },
    duration: {
        type: Number,
        value: 500
    }
})
onMounted(() => {
  window.addEventListener('scroll', handleScroll, false)
  window.addEventListener('resize', handleScroll, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll, false)
  window.removeEventListener('resize', handleScroll, false)
})

const handleScroll = () => {
  backTop.value = window.pageYOffset >= props.showHeight;
}

const toTop = () => {
  const sTop = document.documentElement.scrollTop || document.body.scrollTop;
  scrollTop(window, sTop, 0, props.duration);
//   emits('click');
}

const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
          return window.setTimeout(callback, 1000/60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) {
        // endCallback && endCallback();
        return;
    }

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
        d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
        window.scrollTo(d, d);
    } else {
        el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}



</script>

<style lang="stylus" scoped>
.yx-backTop
    position fixed
</style>