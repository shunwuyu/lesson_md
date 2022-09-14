<template>
<div>
    <h1 @click="add">{{count}}</h1>
    <div>{{x}} {{y}}  </div>
</div>
</template>
<!-- <script setup> -->
<script>
import { ref } from "vue";
import {useMouse} from '../utils/mouse'
export default {
    setup() { 
        let color = ref('red')
        let count = ref(1) 
        function add() { 
            count.value++ ;
            color.value = Math.random() > 0.5 ?"blue": "red";
        } 
        let {x,y} = useMouse()
        return { count, add, x, y, color } 
    }
}
// import { ref, computed } from "vue";


// let count = ref(1)
// function add(){ count.value++}
// let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
// function useTodos() {
//     let title = ref("");
//     let todos = ref([{ title: "学习Vue", done: false }]);
//     function addTodo() { todos.value.push({ title: title.value, done: false, }); title.value = ""; }
//     function clear() { todos.value = todos.value.filter((v) => !v.done); }
//     let active = computed(() => { return todos.value.filter((v) => !v.done).length; });
//     let all = computed(() => todos.value.length); 
//     let allDone = computed({ get: function () { return active.value === 0; },
//      set: function (value) { todos.value.forEach((todo) => { todo.done = value; }); }, });
//     return { title, todos, addTodo, clear, active, all, allDone };
// }

// let {x,y} = useMouse()
</script>
<style scoped>
h1 {
    /* color: red; */
    color: v-bind(color);
}
</style>

