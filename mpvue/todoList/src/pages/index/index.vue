<template>
  <div class="mpvue-demo">
    <!-- 插值
    替换为对应数据对象上 title 属性的值
     -->
    <p class="title">{{title}}</p>
    <!-- 表单输入和应用状态之间的双向绑定 -->
    <input type="text" v-model='mytodo'>
    <button @click='addTodo'>添加一条</button>
    <button @click='clearTodo'>清空</button>
    <ul class="todos">
      <li 
        v-for='(todo,i) in todos'
        :class="{'done':todo.done}"
        @click='toggle(i)'
        :key="i"
        >{{todo.text}}</li>
        <li>
          {{todoNum}}/{{todos.length}}
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  // 数据
  data () {
    return {
      mytodo: '',
      title: 'Hello Mpvue',
      todos: [
      ]
    }
  },
  // 计算属性
  computed: {
    todoNum () {
      return this.todos.filter(v => !v.done).length
    }
  },
  // created生命周期，组件创建后执行
  created () {
    // 从本地存储里获取数据
    this.todos = wx.getStorageSync('todos') || []
  },
  methods: {
    // 清空已完成的事情
    clearTodo () {
      this.todos = this.todos.filter(v => !v.done)
      this.updateStorage()
    },
    // 更新本地存储
    updateStorage () {
      wx.setStorageSync('todos', this.todos)
    },
    // 添加事件
    addTodo () {
      if (!this.mytodo) {
        return
      }
      this.todos.push({text: this.mytodo, done: false})
      this.mytodo = ''
      this.updateStorage()
    },
    // 设置事件状态
    toggle (i) {
      this.todos[i].done = !this.todos[i].done
      this.updateStorage()
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