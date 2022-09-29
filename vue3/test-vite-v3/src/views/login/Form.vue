<template>
    <div class="form_box">
        <a-form :model="formModel" :rules="rules" @finish="handleFinish">
            <p class="text">请输入手机号登录</p>
            <a-form-item name="username">
                <a-input
                    class="reset-input"
                    v-model:value="formModel.username"
                    placeholder="管理员：admin，普通：test"
                />
            </a-form-item>
            <p class="text">请输入密码</p>
            <a-form-item name="password">
                <a-input
                class="reset-input"
                v-model:value="formModel.password"
                type="password"
                placeholder="密码为 123456"
                />
                
            </a-form-item>
            <a-form-item>
                <a-row>
                    <a-col :span="12">
                        <a-checkbox class="reset_checkbox" v-model:checked="checked">自动登录</a-checkbox>
                    </a-col>
                    <a-col :span="12" class="text-right">
                        <span class="gray_text">忘记密码?</span>
                    </a-col>
                </a-row>
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit" class="btn" :loading="loading">立即登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../../store/modules/user';
const userStore = useUserStore();
const loading = ref(false);
const checked = ref(true);
const formModel = reactive({
    username: '',
    password: '',
});
const rules = {
    username: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
    password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
};

const handleFinish = async (values) => {
    loading.value = true;
    const res = await userStore.login(values);
    loading.value = false;
}
</script>

<style lang="less" scoped>
.form_box {
    margin-top: 30px;
    .btn {
      width: 100%;
      height: 54px;
      background: linear-gradient(90deg, #00c3fd 0%, #3662f4 100%);
      border-radius: 6px;
      color: #ffffff;
      font-size: 20px;
      &:hover {
        opacity: 0.85;
        border: none;
      }
    }
    .icon {
      color: #666666;
    }
    .text {
      font-size: 14px;
      line-height: 20px;
      color: #999999;
      letter-spacing: 1.1px;
      margin-bottom: 10px;
    }
    .gray_text {
      font-size: 12px;
      color: #666666;
    }
    .reset_checkbox {
      .ant-checkbox-inner {
        border-radius: 50%;
      }
      & > span:last-child {
        font-size: 12px;
        color: #666666;
      }
    }
    .reset-input {
      height: 50px;
      line-height: 50px;
      border: 1px solid #707070;
      border-radius: 6px;
    }
    .copyright {
      margin-top: 20px;
      font-size: 12px;
      color: #999999;
      opacity: 0.85;
    }
  }
</style>