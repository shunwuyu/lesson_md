<template>
<div
    class="el-form-item"
>
    <label
      v-if="label"
    >{{ label }}</label>
    <slot />
    <p
      v-if="error"
      class="error"
    >
    {{error}}
    </p>
</div>
</template>
<script lang="ts">
export default{
  name:'ElFormItem'
}
</script>
<script  lang="ts" setup>
import Schema from "async-validator"
import { onMounted, inject, ref } from 'vue'
import { emitter } from "../../emitter"
import { FormItem, key } from "./type"

interface Props {
  label?: string
  prop?: string
}
// 错误
const error = ref("")
const formData = inject(key)
console.log(formData, '????')
const o: FormItem = {
  validate,
}
// console.log(formData, '-----------')
const props = withDefaults(defineProps<Props>(), { label: "", prop: "" })
onMounted(() => {
  if (props.prop) {
    emitter.on("validate", () => {
      validate()
      // console.log('--------------------------')
    })
    emitter.emit("addFormItem", o)
  }
})

function validate() {
  console.log(formData, '????')
   if (formData?.rules === undefined) {
    return Promise.resolve({ result: true })
  }
  const rules = formData.rules[props.prop]
  const value = formData.model[props.prop]
  const schema = new Schema({ [props.prop]: rules })
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message || "校验错误"
    } else {
      error.value = ""
    }
  })
}
</script>

<style lang="scss" scoped>

</style>