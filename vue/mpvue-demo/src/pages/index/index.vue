<template>
  <div class="mpvue-demo">
    <p class="title">{{title}}</p>
    <input type="text" v-model='mytodo'>
    <button @click='addTodo'>添加一条</button>
    <ul class="todos">
      <li 
        v-for='(todo,i) in todos'
        v-bind:key='i'
        :class="{'done':todo.done}"
        @click='toggle(i)' 
        >{{todo.text}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      mytodo: '',
      title: 'Hello Mpvue',
      todos: [
        {text: '吃饭', done: false},
        {text: '睡觉', done: false},
        {text: '慕课学习', done: false}
      ]
    }
  },
  methods: {
    addTodo () {
      if (!this.mytodo) {
        return
      }
      this.todos.push(this.mytodo)
      this.mytodo = ''
    },
    toggle (i) {
      this.todos[i].done = !this.todos[i].done
    }
  }
}
</script>

<style>
.title{
  color:#ed12a3;
  text-align: center;
}
ul.todos{
  margin:20px;
}
input{
  border:2px solid #ed12a3;
}
.done{
  text-decoration: line-through;
}
</style>