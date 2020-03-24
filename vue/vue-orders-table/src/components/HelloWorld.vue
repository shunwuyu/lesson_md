<template>
  <div class="hello">
    <div class="app-container">
      <div class="filter-container">
        <el-checkbox-group v-model="checkboxVal">
          <el-checkbox label="apple">
            apple
          </el-checkbox>
          <el-checkbox label="banana">
            banana
          </el-checkbox>
          <el-checkbox label="orange">
            orange
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="name" label="fruitName" width="180" />
        
        <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
          <template slot-scope="scope">
            {{ scope.row[fruit] }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
const defaultFormThead = ['apple', 'banana']
export default {
  name: 'HelloWorld',
  data() {
    return {
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20'
        }
      ],
      key: 1,
      checkboxVal: defaultFormThead,
      formTheadOptions: ['apple', 'banana', 'orange'],
      formThead: defaultFormThead,
    }
  },
  watch: {
    checkboxVal(valArr) {
      console.log(valArr);
      this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
      this.key = this.key + 1 // 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
