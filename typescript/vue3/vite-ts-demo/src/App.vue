<template>
  <div class="todo-container">
    <h1>TodoList</h1>
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="state.todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="state.todos"
        :checkAll="checkAll"
        :clearAllCompletedTodos="clearAllCompletedTodos"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, reactive, watch } from "vue"
import Header from "@/components/todoList/Header.vue"
import List from "@/components/todoList/List.vue"
import Footer from "@/components/todoList/Footer.vue"
import { saveTodos, readTodos } from "@/utils/localStorageUtils"

const state = reactive<{ todos: Todo[] }>({
      todos: [],
})
const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
}
const deleteTodo = (index: number) => {
  state.todos.splice(index, 1)
}
const updateTodo = (todo: Todo, isCompleted: boolean) => {
  todo.isCompleted = isCompleted
}
const checkAll = (isCompleted: boolean) => {
      state.todos.forEach(todo => {
        todo.isCompleted = isCompleted
      })
    }
const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(todo => !todo.isCompleted)
    }

watch(() => state.todos, saveTodos, { deep: true })
onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 1000)
 })
</script>

<style scoped>

</style>