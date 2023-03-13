<template>
    <div class="k-input"
      :class="styleClass"
      @mouseenter="isEnter = true"
      @mouseleave="isEnter = false"
    >
        <input 
            class="k-input__inner"    
            :value="modelValue"
            @input="changeInputVal"
            :disabled="inputProps.disabled"
            v-bind="attrs"
        />
        <div
          @click="clearValue"
          v-if="inputProps.clearable && isClearAbled"
          v-show="isFoucs"
          class="k-input__suffix"
        >
          <!-- <Icon name="error" /> -->
          x
        </div>
   </div>
</template>

<script setup>
import { computed, useAttrs, ref } from 'vue'
const attrs = useAttrs();

const inputProps = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    clearable: {
      type: Boolean,
      default: false
    }
})

const isClearAbled = ref(false);
const isEnter = ref(true);

const styleClass = computed(() => {
  console.log(inputProps.size)
  return {
    "is-disabled": inputProps.disabled,
    [`k-input--${inputProps.size}`]: inputProps.size,
  };
});

const inputEmits = defineEmits(['update:modelValue']);

const changeInputVal = (event) => {
  // console.log(event.target.value)
   event.target.value
    ? (isClearAbled.value = true)
    : (isClearAbled.value = false);
  inputEmits("update:modelValue", event.target.value);
};

const clearValue = () => {
  inputEmits("update:modelValue", "");
};

const isFoucs = computed(() => {
  return isEnter && inputProps.modelValue.length > 0
})
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

.k-input.k-input--medium {
  .k-input__inner {
    height: 36px;
    &::placeholder {
      font-size: 15px;
    }
  }
}

.k-input.k-input--small {
  .k-input__inner {
    height: 32px;

    &::placeholder {
      font-size: 14px;
    }
  }
}

.k-input.k-input--mini {
  .k-input__inner {
    height: 28px;

    &::placeholder {
      font-size: 13px;
    }
  }
}

.k-input__suffix {
  position: absolute;
  right: 10px;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #c0c4cc;
}

</style>