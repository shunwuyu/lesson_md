<template>
  <div id="app">
    <p>{{message}}</p>
    <p>大写： {{ message | capitalize }}</p>
    <p>逆序: {{ reverseMessage }}</p>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question"/>
        <!-- api  question -> 请求  -->
      </p>
      <p>{{answer}}</p>
    </div>
    <!-- 把所有字母有返过来 -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'; // vue 的请求库
import _ from 'lodash'; // 最常的工具库 
export default {
  name: 'App',
  computed:{
    reverseMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize(word) {
      return word.toUpperCase()
    }
  },
  methods: {
    askQuestion() {
      // console.log(this.question);
      //发送请求 fetch ajax 
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          // console.log(response, '+++++++');
          this.answer = response.data.answer
        })

    },
    debouncedGetAnswer() {
      _.debounce(this.askQuestion.bind(this))
    }
  },
  // 订阅发布者模式
  watch: {
    question: function(newQuestion, oldQuestion) {
      // console.log(newQuestion, oldQuestion)
      this.answer = 'Wait fro you to stop typing...'
      // this.askQuestion(); //网络请求 
      this.debouncedGetAnswer();
    }
  },
  data() {
    return {
      message: 'Hello',
      question: '',
      answer: 'I cannot give you an answer util you ask a question!'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
