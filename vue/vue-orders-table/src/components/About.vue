<template>
  <div class="about">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
    </div>
    <el-table 
      :key="tableKey"
      v-loading="listLoading"
      :data="list"

      >
    </el-table>
  </div>
</template>
<script>
import { fetchList } from '@/api/article'
export default {
  data() {
    
    return {
      tableKey:0,
      listLoading: true,
      list: null,
      listQuery: {
        page: 1,
        limit: 20,
        title: ''
      }
    }
  },
  created() {
    // 
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery)
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>