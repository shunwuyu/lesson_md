<script setup lang="ts">
// defineProps()宏函数支持从它的参数中推导类型
// 运行时声明因为传递给defineProps()的参数
// 会作为运行时的 props 选项使用
// const props = defineProps({
//   foo: { type: String, required: true },
//   bar: Number
// })
// 通过泛型参数来定义 props 的类型，这种方式更加直接
// 这被称为基于类型的声明，编译器会尽可能地尝试根据类型参数推导出等价的运行时选项。
// 这种方式的不足之处在于，失去了定义 props 默认值的能力。
// const props = defineProps<{
//   foo: string
//   bar?: number
// }>()
// interface Props {
//   foo: string
//   bar?: number
// }
// const props = defineProps<Props>()
interface Props {
  msg?: string
  labels?: string[]
}
// 被编译为等价的运行时 props 的 default 选项
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
</script>

<template>
</template>

<style>
</style>
