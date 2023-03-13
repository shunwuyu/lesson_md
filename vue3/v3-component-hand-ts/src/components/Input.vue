<template>
    <div class="k-input" :class="styleClass">
        <input 
            class="k-input__inner" 
            :value="inputProps.modelValue"
            @input="changeInputVal"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
type InputProps = {
  modelValue?: string | number;
  disabled?: boolean;
};
//组件发送事件类型
type InputEmits = {
  (e: "update:modelValue", value: string): void;
};
const inputProps = withDefaults(defineProps<InputProps>(), {
  modelValue: "",
});

const inputEmits = defineEmits<InputEmits>();
const changeInputVal = (event: Event) => {
  inputEmits("update:modelValue", (event.target as HTMLInputElement).value);
};
const styleClass = computed(() => {
  return {
    "is-disabled": inputProps.disabled,
  };
});
</script>

<style lang="stylus" scoped>
.k-input {
  font-size: 14px;
  display: inline-block;
  position: relative;

  .k-input__inner {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    width: 100%;
    &::placeholder {
      color: #c2c2ca;
    }

    &:hover {
      border: 1px solid #c0c4cc;
    }

    &:focus {
      border: 1px solid #409eff;
    }
  }
}

.k-input.is-disabled {
  .k-input__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
    &::placeholder {
      color: #c3c4cc;
    }
  }
}

</style>