<template>
  <section class="main">
    <div class="topic-tab">
      <nuxt-link class="tab" to="/articles/all">全部</nuxt-link>
      <nuxt-link class="tab" to="/articles/good">精华</nuxt-link>
      <nuxt-link class="tab" to="/articles/share">分享</nuxt-link>
      <nuxt-link class="tab" to="/articles/ask">问答</nuxt-link>
      <nuxt-link class="tab" to="/articles/job">招聘</nuxt-link>
    </div>
    <nuxt-child />
  </section>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="stylus">
.main
  width: 98%;
  margin: 15px auto 0;
  /* min-height: 100vh; */
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  .topic-tab
    display flex
    padding 10px
    background-color #f6f6f6
    align-items center
    .tab
      flex 1
      margin 0 10px
      color #80bd01
      text-decoration none
      font-size 14px
      font-weight bold
      text-align center
    .nuxt-link-active
      background-color: #80bd01;
      color: #fff;
      padding: 3px 2px;
      border-radius: 3px;
</style>