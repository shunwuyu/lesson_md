<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue"
import { Todo } from "@/types/todo"
// 定义接口,约束对象的类型
const props = defineProps({
    addTodo: {
        type: Function,
        required: true
    }
})

const title = ref("")

    // 回车的事件的回调函数,用来添加数据
    const add = () => {
      // 获取文本框中输入的数据,判断不为空
      const text = title.value
      if (!text.trim()) return
      // 此时有数据,创建一个todo对象
      const todo:Todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      }

      // 调用方法addTodo的方法
      props.addTodo(todo)
      console.log("添加todo", todo)

      // 清空文本框
      title.value = ""
    }
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>