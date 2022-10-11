<el-form
  :model="ruleForm"
  :rules="rules"
  ref="form"
  label-width="100px"
  class="demo-ruleForm"
>
  <el-form-item label="用户名" prop="username"> 
    <el-input v-model="ruleForm.username">
  </el-form-item>
  <el-form-item label="密码" prop="passwd">      
    <el-input type="textarea" v-model="ruleForm.passwd"/>   
  </el-form-item>
  <el-form-item>      
    <el-button type="primary" @click="submitForm()">登录</el-button>    
  </el-form-item>
</el-form>
<script>
  import { ref, reactive, toRefs } from 'vue'
  export default {
    setup() {
      const form = ref(null)
      const ruleForm = reactive({
        ruleForm: {
          name: '',
          region: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      })
      const rules = reactive({
        rules: {
          username: { required: true,min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' },
          passwd: [{ required: true, message: '密码', trigger: 'blur' }]
        }
      })
      function submitForm() {
        form.value.validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
      function resetForm() {
        form.value.resetFields()
      }

      return {
        form,
        ...toRefs(ruleForm),
        ...toRefs(rules),
        submitForm,
        resetForm
      }
    }
  }
</script>