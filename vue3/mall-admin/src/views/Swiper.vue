<template>
<div>
  <el-card class="swiper-container">
      <template #header>
          <div class="header">
              <el-button type="primary" :icon="Plus" @click="handleAdd">增加</el-button>
              <el-popconfirm
              title="确定删除吗？"
              confirmButtonText='确定'
              cancelButtonText='取消'
              @confirm="handleDelete"
              >
              <template #reference>
                  <el-button type="danger" :icon="Delete">批量删除</el-button>
              </template>
              </el-popconfirm>
          </div>
      </template>
      <el-table
        load="state.loading"
        ref="multipleTable"
        :data="state.tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="轮播图"
          width="200">
          <template #default="scope">
            <img style="width: 150px;height: 150px" :src="scope.row.carouselUrl" alt="轮播图">
          </template>
        </el-table-column>
        <el-table-column
          label="跳转链接"
          >
          <template #default="scope">
            <a target="_blank" :href="scope.row.redirectUrl">{{ scope.row.redirectUrl }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="carouselRank"
          label="排序值"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="添加时间"
          width="200"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200"
        >
           <template  #default="scope">
            <a style="cursor: pointer; margin-right: 10px" @click.prevent="handleEdit(scope.row.carouselId)">修改</a>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="state.total"
        :page-size="state.pageSize"
        :current-page="state.currentPage"
        @current-change="changePage"
      />
  </el-card>
  <el-dialog
    :title="type == 'add' ? '添加轮播图' : '修改轮播图'"
    v-model="state.visible"
    width="400px"
  >
    <el-form :model="state.ruleForm" :rules="state.rules" ref="formRef" label-width="100px" class="good-form">
      <el-form-item label="图片" prop="url">
        <el-upload
          class="avatar-uploader"
          :action="state.uploadImgServer"
          accept="jpg,jpeg,png"
          :headers="{
            token: state.token
          }"
          :show-file-list="false"
          :before-upload="handleBeforeUpload"
          :on-success="handleUrlSuccess"
        >
          <img style="width: 200px; height: 100px; border: 1px solid #e9e9e9;" v-if="state.ruleForm.url" :src="state.ruleForm.url" class="avatar">
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="跳转链接" prop="link">
        <el-input type="text" v-model="state.ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input type="number" v-model="state.ruleForm.sort"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.visible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { getCarousels, deleteCarousels, addCarousel } from '@/service/swiper.js'
import { Plus, Delete } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { uploadImgServer, localGet } from '@/utils'
import axios from 'axios'

const multipleTable = ref(null)
const formRef = ref(null)

const state = reactive({
  id: null,
  loading: false,
  tableData: [], // 数据列表
  currentPage: 1,
  pageSize: 10,
  type: 'add', // 操作类型,
  multipleSelection: [], // 选中项
  total: 0, // 总条数
  visible: false,
  ruleForm: {
    url: '',
    link: '',
    sort: ''
  },
  rules: {
    url: [
      { required: 'true', message: '图片不能为空', trigger: ['change'] }
    ],
    sort: [
      { required: 'true', message: '排序不能为空', trigger: ['change'] }
    ]
  },
  token: localGet('token'),
  uploadImgServer
  // uploadImgServer: 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'
})

onMounted(() => {
  // console.log(addSwiper.value, multipleTable, '/////')
  fetchCarousels()
})

const handleAdd = () => {
  state.type = 'add'
  // console.log(addSwiper.value)
  state.visible = true
}

const handleBeforeUpload = (file) => {
  const sufix = file.name.split('.')[1] || ''
  if (!['jpg', 'jpeg', 'png'].includes(sufix)) {
    ElMessage.error('请上传 jpg、jpeg、png 格式的图片')
    return false
  }
}

const handleUrlSuccess = (val) => {
  state.ruleForm.url = val.data || ''
}


const fetchCarousels = async () => {
    state.loading = true
    const { data } = await getCarousels({
        params: {
            pageNumber: state.currentPage,
            pageSize: state.pageSize
        }
    })
    state.tableData = data.list
    state.total = data.totalCount
    state.currentPage = data.currPage
    state.loading = false
    // console.log(data, '-----------------')
}

const handleSelectionChange = (val) => {
    state.multipleSelection = val
}

const handleDelete = async () => {
    if (!state.multipleSelection.length) {
        ElMessage.error('请选择项')
        return
    }
    await deleteCarousels({
        data: {
            ids: state.multipleSelection.map(i => i.carouselId)
        }
    })

    ElMessage.success('删除成功')
    await getCarousels({
        params: {
            pageNumber: state.currentPage,
            pageSize: state.pageSize
        }
    })
}

const handleEdit = (id) => {
  state.visible = true
  state.id = id
  // console.log(args, '////');
}

const changePage = (val) => {
  state.currentPage = val
  fetchCarousels()
}

const submitForm = () => {
  // console.log(formRef.value.validate)
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (state.type == 'add') {
        console.log(state.ruleForm)
        // axios.post('/carousels', {
        //   carouselUrl: state.ruleForm.url[0],
        //   redirectUrl: state.ruleForm.link,
        //   carouselRank: state.ruleForm.sort
        // }).then(() => {
        //   ElMessage.success('添加成功')
        //   state.visible = false
        // })
        await addCarousel({
          carouselUrl: state.ruleForm.url[0],
          redirectUrl: state.ruleForm.link,
          carouselRank: state.ruleForm.sort
        })
        ElMessage.success('添加成功')
        state.visible = false
        // fetchCarousels()
      } else {
        
      }
    }
  })
}

</script>

<style scoped>
 .avatar-uploader {
    width: 100px;
    height: 100px;
    color: #ddd;
    font-size: 30px;
  }
  .avatar-uploader >>> .el-upload {
    width: 100%;
    text-align: center;
  }
  .avatar-uploader-icon {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e9e9e9;
    padding: 32px 17px;
  }
</style>