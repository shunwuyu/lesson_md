<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <el-table
      v-loading="listLoading"
      :data="list" 
      >
      <el-table-column label="ID" prop="id" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row._id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="OrderDate" prop="orderDate" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{ row.orderDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" prop="status" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{ row.status }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="ShoppingFee" prop="shoppingFee" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{ row.shippingFee.$numberDecimal }}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="Total" prop="total" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{ row.total.$numberDecimal }}</span>
        </template>
      </el-table-column> -->
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-size="limit"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import Axios from 'axios'
// import api from '@/axios/api.js'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  filters: {
    formatStatus(status) {
      if(status == -1) {
        return '失效'
      } else if (status == 0) {
        return '创建成功'
      } else if (status == 1) {
        return '支付成功'
      }
    }
  },
  // HelloWorld
  data() {
    return {
      list: null,
      total: 0,
      limit: 10,
      page: 2,
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true;
      Axios.post('/api/orders', {
        // 2加分页
        params: {
          limit: this.limit,
          page: this.page,
        }
      }).then((res) => {
          // console.log(res)
        // this.total = response.data.total
        // this.list = res.data.orders;
        console.log(res);
        this.list = res.data.result;
        // console.log(res.data.data);
        this.total = res.data.total
        setTimeout(() => {
          this.listLoading = false;
        }, 500)
      }).catch((err) => {
        console.log(err)
      })
    },
    handleCurrentChange(currentPage) {
      // console.log(s);
      this.page = currentPage;
      console.log(this.page);
      this.getList();
    }
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
