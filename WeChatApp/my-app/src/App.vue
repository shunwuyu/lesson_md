<template>
  <div id="app">
    <!-- <p>I am aaa, {{$t("hello")}}</p> -->
    <!-- <button class="btn" @click="$i18n.locale = ($i18n.locale === 'zh' ? 'en' : 'zh')">切换语言</button> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>
