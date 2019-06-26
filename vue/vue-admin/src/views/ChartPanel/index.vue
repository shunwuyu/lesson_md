<template>
  <div>
    <el-card body-style="padding:0;" style="margin-bottom: 20px;" class="panel-header">
      <div slot="header" style="display: flex; justify-content:space-between;">
        <span>
          <span class="back-button" @click="$router.go(-1)">
            <i class="el-icon-back" />
            <span>返回</span>
          </span>
          <span v-if="this.$route.params.id !== 'create'">编辑图表</span>
          <span v-else>创建图表</span>
          <el-button size="mini" type="text" style="margin-left:10px;" @click="viewAllChart">
            全部图表
          </el-button>
        </span>
        <span>
          <el-button size="mini" type="primary" style="float: right;margin:0 10px 0 0;" icon="el-icon-download" @click="handleDownload" />
          <el-button v-if="this.$route.params.id !== 'create'" size="mini" type="primary" style="float: right;margin:0 10px 0 0;" @click="handleLinkDB">添加到仪表盘</el-button>
          <el-button size="mini" type="primary" style="float: right;margin:0 10px 0 0;" icon="el-icon-save" @click="handleSave">保存 </el-button>
          <el-button v-if="this.$route.params.id !== 'create'" size="mini" type="primary" style="float: right;margin:0 10px 0 0;" @click="$router.replace(`/chartpanel/create`)">新建图表</el-button>
        </span>
      </div>
    </el-card>
    <div class="app-container" style="display: flex;">
      <el-card id="dataPanel" style="width:300px;margin-right: 20px;text-align:center;">
        <data-panel ref="dataPanel" :result-loading="loading" :data-src="dataSrc" @change="handleDataSrcChange" />
      </el-card>
    </div>
  </div>
</template>
<script>
import dataPanel from './components/dataPanel'
export default {
  name: 'ChartPanel',

  components: {
    dataPanel
  },
  data () {
    return {
      loading: false,
      dataSrc: undefined,
    }
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {

        if (this.$route.params.id !== 'create') {
          console.log('aaaa');
        } else {
          this.chartName = undefined
          this.chartDesc = undefined
          this.$nextTick(() => {
            this.$refs.dataPanel.initWithDataSrc()
          })
        }
      }
    },
    sqlSentence(value) {
      return '---';
      // return buildSqlSentence({
      //   dataSrc: this.dataSrc,

      // })
    }
  },
  computed: {
    sqlSentence() {
      console.log('qqq-------------------');
      return 1;
    }
  },
  methods: {
    handleDownload() {

    },
    handleLinkDB () {

    },
    handleSave () {

    },
    handleDataSrcChange (value) {

    },
    viewAllChart () {

    }
  }
}
</script>
<style lang="scss" scoped>
.back-button {
  display: inline-block;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid #909090;
  cursor: pointer;
  span {
    padding: 5px;
    font-size: 14px;
  }
}
.analysis-form {
  width: 100%;
  padding-right: 20px;
  /deep/ .el-form-item--mini.el-form-item {
    margin-bottom: 10px;
  }
  /deep/ .el-form-item--mini .el-form-item__label,.limit-input {
    color: #909399;
    font-size: 14px;
  }
}
.form-wrapper {
  display: flex;
}
.chart-form {
  width: 250px;
  /deep/ .el-form-item--mini.el-form-item {
    margin-bottom: 10px;
  }
}
.draggable-wrapper {
  font-size: 14px;
  min-height: 30px;
  border-bottom: 1px solid #E4E7ED;
  .draggable-item {
    margin-right: 10px;
  }
  /deep/ .el-select--mini {
      margin: 0;
    }
}
.selected-field {
   /deep/ .el-input__inner {
    height: 20px;
    line-height: 20px;
    border: none;
    background-color: rgba($color: #fff, $alpha: 0);
    padding: 0;
  }
  /deep/ .el-input__suffix {
      right: 0px;
    .el-input__suffix-inner {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      .el-input__icon {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
.help-center-wrapper {
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  right: 25px;
  .help-center {
    width: 45px;
    height: 45px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    line-height: 45px;
    font-size: 20px;
    color: #205cd8;
    text-align: center;
    /deep/ .el-dropdown {
      font-size: 20px;
      color: #205cd8;
    }
  }
}
</style>
