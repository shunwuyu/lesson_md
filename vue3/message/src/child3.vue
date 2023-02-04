<template>
    <button @click="emit('myClick', 'dddd')">按钮</button>
    <button @click="handleClick">按钮</button>
    {{msg1}}<br/>
    {{msg2}}
</template>
<script setup>
const emit = defineEmits(["myClick","myClick2"])
const handleClick = ()=>{
        emit("myClick", "这是发送给父组件的信息")
    }
 const props = defineProps({
        msg1: String,
        // 写法一
        msg2: String
        // 写法二
        // msg2:{
        //     type:String,
        //     default:""
        // }
    })
    console.log(props)

</script>