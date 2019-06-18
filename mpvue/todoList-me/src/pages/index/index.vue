<template>
  <div class="mpvue-demo">
    <view>
      <text>测试文字</text>
    </view>
    <swiper indicator-dots="false"
      autoplay="true" interval="5000" duration="1000">
      <block v-for="(url, i) in imgUrls" :key="i">
        <swiper-item>
          <!-- 绑定一个属性 -->
          <image :src="url" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <p class="title">{{title}}</p>
    <input type="text" v-model='mytodo' placeholder="请输入待办事项">
    <button @click='addTodo'>添加一条</button>
    <button @click='clearTodo'>清空</button>
    <ul class="todos">
      <li :key="i" v-for="(todo,i) in todos" 
      :class="{'done':todo.done}"
      @click='toggle(i)' 
      >
      {{todo.text}}
      </li>
      <li>
          {{todoNum}}/{{todos.length}}
        </li>
    </ul>
    <button @click='handleNavigator'>跳转</button>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      mytodo: '',
      title: 'Hello Mpvue',
      todos: [
        {text: '吃饭', done: false},
        {text: '睡觉', done: false},
        {text: '慕课学习', done: false}
      ],
      imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    }
  },

  components: {
    card
  },
  computed: {
    todoNum () {
      return this.todos.filter(v => !v.done).length
    }
  },
  methods: {
    addTodo () {
      if (!this.mytodo) {
        return
      }
      this.todos.push({
        text: this.mytodo,
        done: false
      })
      this.mytodo = ''
    },
    toggle (i) {
      const todos = this.todos.slice(0);
      todos[i].done = !todos[i].done;
      this.todos = todos;
    },
    clearTodo () {
      this.todos = this.todos.filter(v => !v.done);
    },
    handleNavigator() {
      wx.navigateTo({
        url: '/pages/test/main'
      })
    }
  },
  watch: {
    todos: function(todos) {
      wx.setStorageSync('todos', todos);
    }
  },

  created() {
    // let app = getApp()
    this.todos = wx.getStorageSync('todos') || []
  }
};
</script>

<style scoped>
.title{
  color:#ed12a3;
  text-align: center;
}
ul.todos{
  margin:20px;
}
input {
  padding: 6px;
  border:1px solid #ed12a3;
}
.done{
  text-decoration: line-through;
}
</style>
