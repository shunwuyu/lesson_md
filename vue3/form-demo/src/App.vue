<template>
  <div>
    {{model.username}}
    <el-form
      ref="myForm"
      :model="model"
      :rules="rules"
    >
      <el-form-item
        label="用户名："
        prop="username"
      >
        <el-input v-model="model.username" />
      </el-form-item>
      <el-form-item
        label="密码："
        prop="password"
      >
        <el-input v-model="model.password" />
      </el-form-item>
      <br>
      <el-form-item>
        <el-button
          type="primary"
          @click="login"
        >
          登 录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import ElForm from './components/form/ElForm.vue'
import ElFormItem from './components/form/ElFormItem.vue'
import ElInput from './components/form/ElInput.vue'
import ElButton from './components/button/ElButton.vue'
import {ref,reactive} from 'vue'
// import {FormType} from './components/form/type'
// console.log(FormType)
const model = reactive({
  username: "",
  password: "",
})
const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名！",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
    },
  ],
})
// 获取表单实例
// const myForm = ref<FormType>()

const login = () => {
  console.log('/////', myForm.value)
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model)
    } else {
      alert("请正确填写表单！")
    }
  })
}
</script>

<style scoped>

</style>