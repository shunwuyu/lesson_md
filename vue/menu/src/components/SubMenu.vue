<template>
  <div class="subMenu">
    <span @click="change"><i v-if="!isShow">+</i><i v-if="isShow">-</i>
      <slot name="title"></slot>
    </span>
    <ul v-if="isShow">
        <slot></slot>
    </ul>
    
  </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        change(){
            this.isShow = !this.isShow;
        }
    }
    
}
</script>
<style lang="stylus">
.subMenu {
  span {
    display: block;
    padding: 5px;
    background: #4cb4e7;
    color: #fff;
    border-bottom: 1px solid #fff;
    position: relative;
    i{
        position: absolute;
        right:10px;
        bottom:5px;
        font-style:normal;
        font-weight: bold;
    }
  }
  li{
      background: #e2dbb2;
  }
}
</style>