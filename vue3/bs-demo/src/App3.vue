<template>
    <div class="pulldown">
        <div
        class="pulldown-bswrapper"
        ref="bsWrapper"
        >
            <div class="pulldown-scroller">
                <div class="pulldown-wrapper">
                <div v-show="beforePullDown">
                    <span>Pull Down and refresh</span>
                </div>
                <div v-show="!beforePullDown">
                    <div v-show="isPullingDown">
                    <span>Loading...</span>
                    </div>
                    <div v-show="!isPullingDown">
                    <span>Refresh success</span>
                    </div>
                </div>
                </div>
                <ul class="pulldown-list">
                <li
                    :key="i"
                    class="pulldown-list-item"
                    v-for="i of dataList"
                >{{ `I am item ${i} ` }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)
const TIME_BOUNCE = 800
const REQUEST_TIME = 1000
const THRESHOLD = 70
const STOP = 56
let STEP = 0

function generateData() {
  const BASE = 30;
  const begin = BASE * STEP;
  const end = BASE * (STEP + 1);
  let ret = [];
  for (let i = end; i > begin; i--) {
    ret.push(i)
  }
  return ret
}

let beforePullDown = ref(true)
let isPullingDown = ref(false)
let dataList = ref(generateData())
let bsWrapper = ref(null)
let bscroll = null
const initBscroll = () => {
    bscroll = new BScroll(bsWrapper.value, {
        scrollY: true,
        bounceTime: TIME_BOUNCE,
        useTransition: false,
        pullDownRefresh: {
          threshold: THRESHOLD,
          stop: STOP
        }
      })

    bscroll.on('pullingDown', pullingDownHandler)
}
const pullingDownHandler = async () => {
    beforePullDown.value = false
    isPullingDown.value = true
    STEP += 1
    await requestData()
    isPullingDown.value = false
    finishPullDown()
}

const finishPullDown = async () => {
    bscroll.finishPullDown()
    setTimeout(() => {
        beforePullDown.value = true
        bscroll.refresh()
    }, TIME_BOUNCE + 100)
}

const  requestData = async () => {
    try {
        const newData = await ajaxGet()
        dataList.value = newData.concat(dataList.value)
    } catch (err) {
    // handle err
    console.log(err)
    }
}

const ajaxGet = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const dataList = generateData()
            resolve(dataList)
        }, REQUEST_TIME)
    });
}
onMounted(() => {
    initBscroll()
})
</script>

<style lang="stylus" scoped>
.pulldown
  height 100%
.pulldown-bswrapper
  position relative
  height 100%
  padding 0 10px
  border 1px solid #ccc
  overflow hidden
.pulldown-list
  padding 0
.pulldown-list-item
  padding 10px 0
  list-style none
  border-bottom 1px solid #ccc
.pulldown-wrapper
  position absolute
  width 100%
  padding 20px
  box-sizing border-box
  transform translateY(-100%) translateZ(0)
  text-align center
  color #999
</style>