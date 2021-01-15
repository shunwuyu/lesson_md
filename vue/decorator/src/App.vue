<template>
  <div id="app">
    <el-table :data="tableData">
      <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { MessageBox } from 'element-ui';
function confirmation(target, name, descriptor) {
  console.log(target, name, descriptor);
  let oldValue = descriptor.value;
  console.log(oldValue)
  descriptor.value = function(...args) {
    // console.log(args, '++++');
     MessageBox.confirm('您确定要删除吗', '提示')
        .then(oldValue.bind(this, ...args))
        .catch(() => {});
  }
  return descriptor;
}
export default {
  name: 'App',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    @confirmation
    handleDelete(index, row) {
      // console.log(index);
      this.tableData.splice(index, 1)
      // MessageBox.confirm('此操作将永久删除该记录, 是否继续?', '提示')
      //   .then(() => {
      //     if (arguments) {
      //       this.tableData.splice(arguments[0], 1)
      //     }
      //   })
      //   .catch(() => {});
      // console.log(index);

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
