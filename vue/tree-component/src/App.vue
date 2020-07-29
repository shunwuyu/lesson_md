<template>
  <div id="app">
    <el-tree :data="data"
    show-checkbox
    @check-change="handleCheckChange"
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps" ></el-tree>
    <cTree :data="myData"></cTree>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import cTree from '@/components/c-tree.vue'
export default {
  name: 'App',
  data() {
    return {
      myData: [
      {
          'name': 'Web秀',
          'children': [{
              'name': 'web前端',
              'children': [{
                  'name': 'CSS'
              }, {
                  'name': 'JavaScript'
              }, {
                  'name': 'Vue'
              }, {
                  'name': '小程序'
              }, {
                  'name': 'Three.js'
              }]
          }, {
              'name': '服务器'
          }, {
              'name': '工具类'
          }]
      }, {
          'name': '今日头条',
          'children': [{
              'name': '图片'
          }, {
              'name': '新闻',
              'children': []
          }]
      }, {
          'name': 'Angular'
      }
    ], 
      data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    }
  },
  components: {
    cTree
    // HelloWorld
    // Tree
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
