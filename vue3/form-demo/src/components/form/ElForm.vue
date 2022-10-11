<template>
    <div class="el-form">
        <slot/>
    </div>
</template>
<script lang="ts">
export default{
  name:'ElForm'
}
</script>
<script setup lang="ts"> 
import { PropType, provide, ref } from 'vue'
import { Rules } from "async-validator"
import { FormItem, key } from "./type"
import { emitter } from "../../emitter"

const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
})

provide(key, {
  model: props.model,
  rules: props.rules
})

const items = ref<FormItem[]>([])

emitter.on("addFormItem", (item) => {
  items.value.push(item)
})

function validate(cb: (isValid: boolean) => void) {
  const tasks = items.value.map((item) => item.validate())
  Promise.all(tasks)
    .then(() => { cb(true) })
    .catch(() => { cb(false) })
}

defineExpose({
  validate,
})

</script>

<style scoped>

</style>