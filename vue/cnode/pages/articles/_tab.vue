<template>
  <div ref="article" class="article-main">
    <ul class="articles-list">
      <li v-for="(item, idx) in list " :key="idx" class="item" @click="linkDetail(item.id)">
        <img class="avatar" :src="item.author.avatar_url" alt="">
        <div v-if="item.top" class="label green">
          {{ tabs['top'] }}
        </div>
        <div v-else-if="item.good" class="label green">
          {{ tabs['good'] }}
        </div>
        <div v-else class="label gray">
          {{ tabs[item.tab] }}
        </div>
        <div class="text">
          <h3 class="title">
            {{ item.title }}
          </h3>
          <div class="count">
            <span class="reply">
              {{ item.reply_count }}
            </span>
            /
            <span class="visit">
              {{ item.visit_count }}
            </span>
          </div>
        </div>
        <span class="time"> {{ item.last_reply_at | diffTime }}前</span>
      </li>
    </ul>
  </div>
</template>
<script>
import * as types from '@/store/action-types'
import { getArticleList } from '@@/api/articles'
import _ from 'lodash'
import moment from 'moment'
import { Loading } from 'element-ui'
export default {
  filters: {
    // 参考 http://momentjs.cn/docs/#/durations/humanize/
    diffTime(time) {
      const diff = moment() - moment(time)
      const du = moment.duration(diff, 'ms')
      return du.locale('zh-cn').humanize()
    }
  },
  data() {
    return {
      tabs: {
        top: '置顶',
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘'
      },
      page: 1
    }
  },
  computed: {
    list() {
      return [...this.$store.getters['articles/list']]
    }
  },
  async fetch({ store, params }) {
    const loadingInstance = Loading.service({
      fullscreen: true,
      background: 'rgba(0, 0, 0, .3)'
    })
    store.commit(`articles/${types.CLEAR_LIST}`)
    this.page = 0
    await store.dispatch(
      `articles/${types.CHANGE_LIST.toLowerCase()}`,
      { tab: params.tab, page: 1 }
    )
    if (loadingInstance) {
      loadingInstance.close()
    }
  },
  mounted() {
    this.$refs.article.addEventListener('scroll', _.throttle(this.computedScroll, 300))
  },
  methods: {
    linkDetail(id) {
      window.location.href = `https://cnodejs.org/topic/${id}`
    },
    async getArticleList() {
      const loadingInstance = Loading.service({
        fullscreen: true,
        background: 'rgba(0, 0, 0, .3)'
      })
      const result = await getArticleList({ page: ++this.page, tab: this.$route.params.tab })
      this.$store.dispatch(
        `articles/${types.ADD_LIST.toLowerCase()}`,
        result.data.data
      )
      this.$nextTick(() => {
        loadingInstance.close()
      })
    },
    computedScroll() {
      if (!this.$refs.article) return
      const offsetHeight = this.$refs.article.offsetHeight
      const { scrollTop, scrollHeight } = this.$refs.article
      if (scrollTop + offsetHeight >= scrollHeight - 150) {
        this.getArticleList()
      }
    }
  }
}
</script>

<style lang="stylus">
  .article-main
    height calc(100vh - 172px)
    overflow-y scroll
    .articles-list
      .item
        position relative
        display flex
        padding 10px
        box-sizing boborder-box
        align-items: center;
        background: #fff;
        border-top: 1px solid #f0f0f0;
        .avatar
          width 30px
          height 30px
          border-radius 5px
        .label
          margin-left: 10px;
          padding: 2px 4px;
          border-radius: 3px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          -o-border-radius: 3px;
          color: #fff;
          font-size: 12px;
          &.green
            background: #80bd01;
            color: #fff;
            font-size: 12px;
          &.gray
            background-color: #e5e5e5;
            color: #999;
            font-size: 12px;
        .text
          width 75%
          margin-left 10px
          padding-top 5px
          box-sizing border-box
          .title
            width: 100%
            color: #333;
            font-size: 14px
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          .count
            margin-top 5px
            font-size 13px
            .reply
              color: #9e78c0;
            .visit
              color: #b4b4b4;
        .time
          position absolute
          right 10px
          bottom 10px
          font-size 12px
          text-align right
          min-width 50px;
          display inline-block
          white-space nowrap
          color: #778087
</style>