<template>
  <div id="app" class="app-container">
    <el-input placeholder="请输入您要搜索的内容" prefix-icon="el-icon-search"
     v-model="keyword" class="search-input" clearable>
    </el-input>
    <!-- <el-table
      :data="seaResults"
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="标题"
        >
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { mapStates, mapState } from 'vuex';
import API  from '@/api/search';
export default {
  name: 'App',
  data() {
    return {
      keyword: '',
      seaResults: []
    }
  },
  watch:{
    keyword(newVal, oldVal) {
      // doSearch(newVal)
      // console.log(API)
      if (!newVal) return;
      API.doSearch(newVal, (res) => {
        this.seaResults = res.data
      })
    }
  },
  // computed: mapState({
  //   keyword: (state) =>  state.search.keyword
  // }),
  methods: {
    doSearch () {
      console.log(this.keyword)
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
