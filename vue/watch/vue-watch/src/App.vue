<template>
  <div id="app">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>Capitalized {{message | capitalize}}</p>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{answer}}</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import _ from 'lodash';
import axios from 'axios';
// console.log(_.debounce);
export default {
  name: 'App',
  filters: {
    capitalize(word) {
      return word.toUpperCase()
    }
  },
  data() {
    return {
      message: 'Hello',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  methods: {
    debouncedGetAnswer() {
      console.log('aaa');
    }, 
    getAnswer() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          this.answer = _.capitalize(response.data.answer) 
        })
        .catch(error => {
          this.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },
  created: function() {
    // console.log(_.debounce);
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  components: {
    // HelloWorld
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
