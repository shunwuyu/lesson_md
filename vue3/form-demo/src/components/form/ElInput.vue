<template>
    <div>
        <input 
            :value="modelValue"
            class="el-input--inner"
            @input="onInput"
        />
    </div>
</template>
<script lang="ts">
export default{
  name:'ElInput'
}
</script>
<script  lang="ts" setup>
import { emitter } from "../../emitter"
defineProps<{
  modelValue:string
}>()

const emit = defineEmits<{
  (e: "update:model-value", value: string): void
}>()

function onInput(e: Event) {
    const input = e.target as HTMLInputElement
    emit("update:model-value", input.value)
    emitter.emit("validate")
}
</script>

<style lang="scss" scoped>

</style>