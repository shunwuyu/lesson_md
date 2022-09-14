<template>
<div>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <ul v-if="todos.length">
        <li v-for="todo in todos">
            <input type="checkbox" v-model="todo.done" />
            <span :class="{done: todo.done}">{{todo.title}}</span>
        </li>
    </ul>
    <div v-else>暂时无数据</div>
    <div>
        全选<input type="checkbox" v-model="allDone"/>
        <span>{{active}} / {{all}}</span>
    </div>
</div>
</template>
<script setup>
import { ref, watchEffect, computed } from 'vue'
let { title, addTodo, todos, allDone, all, active  } = useTodos();
function useTodos() {
    let title = ref('')
    // let todos = ref([{ title: "学习Vue", done: false }]);
    // let todos = ref(JSON.parse(localStorage.getItem('todos')||'[]'));
    let todos = useStorage('todos',[])
    watchEffect(()=>{ localStorage.setItem('todos',JSON.stringify(todos.value))})

    function addTodo() {
        todos.value.push({ title: title.value, done: false })
        title.value = "";
    }
    let allDone = computed({
        get() {
            return active.value === 0;
        },
        set(value) {
            todos.value.forEach((todo) => {
                todo.done = value
            })
        }  
    });
    let all = computed(() => todos.value.length);
    let active = computed(() => { 
        return todos.value.filter((v) => !v.done).length;
    });
    return {
        title, 
        todos,
        addTodo,
        allDone,
        all,
        active
    }
}
function useStorage(name, value=[]) {
    let data = ref(JSON.parse(localStorage.getItem(name)|| value))
    watchEffect(()=>{ localStorage.setItem(name,JSON.stringify(data.value)) })
    return data
}
</script>