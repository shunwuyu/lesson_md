<script setup lang="ts">
import { ref, reactive } from 'vue'
import { sleep } from './utils';
import useGlobal from './hooks/useGlobal'
const { $modal } = useGlobal();
const show = ref(false)
const form = reactive({
  account: '',
  password: '',
  loading: false
});

const handleShowModal = () => {
  show.value = true
}
const doCancel = () => {
  console.log('cancel');
}
const doConfirm = async() => {
  // console.log('confirm');
  form.loading = true;
  await sleep(1000);
  form.loading = false;
  show.value = false;
  console.log('提交成功');
}

const handleShowModal3 = () => {
      $modal.show({
        title: '演示-API调用弹框',
        maskClose: true,
        opacity: 0.9,
        content: 'hello world ~',
        async onConfirm() {
          console.log('点击确定 before');
          await sleep(2000);
          console.log('点击确定 after');
        }
      });
    };
</script>

<template>
<button @click="handleShowModal">显示弹框</button>
<RModal v-model="show" title="演示-提交表单" @on-cancel="doCancel" @on-confirm="doConfirm">
  <input type="text"
           v-model="form.account"
           placeholder="请输入账号" />
  <br>
  <input type="text"
           v-model="form.password"
           placeholder="请输入密码" />
</RModal>
<legend>演示-API调用弹框，点击“确定”事件是异步事件</legend>
    <button @click="handleShowModal3">显示弹框</button>
</template>

<style scoped>

</style>
