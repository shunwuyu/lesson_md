<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>      
        全选<input type="checkbox" v-model="allDone" />      
        <span> {{ active }} / {{ all }} </span>    
    </div>
  </div>
</template>
<script setup>
import useTodos from '../hooks/useTodo.js'

let { title, todos, addTodo, clear, active, all, allDone } = useTodos();

</script>
<style scoped>
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
.remove-btn {
  padding: 3px;
  cursor: pointer;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 0.5s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.dustbin {
  font-size: 20px;
  position: fixed;
  right: 10px;
  top: 10px;
}
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 11px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>