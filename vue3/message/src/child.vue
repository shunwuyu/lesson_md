
<script setup>
    
    // 方法二 适用于Vue3.2版本, 不需要引入
    import { defineExpose } from "vue"
    defineExpose({
        childName: "这是子组件的属性",
        someMethod(){
            console.log("这是子组件的方法")
        }
    })
</script>
