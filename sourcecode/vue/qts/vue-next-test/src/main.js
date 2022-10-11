import { createApp, reactive } from 'vue';
// import App from './App.vue'
// composition api 多个方法组合来使用的
const App = {
  setup() { //created  只执行一次
    let state = reactive({name: "刘子明"})
    console.log(state, '----------');
    return {state}
  },
  template: `<div>{{state.name}}</div>`
}

createApp(App).mount('#app')
