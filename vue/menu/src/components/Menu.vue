<template>
  <ul class="menu">
    <slot></slot>
  </ul>
</template>
<style lang="stylus">
  ul{
      margin:0;
      padding:0;
  }
  li{
      list-style: none;
  }
  .menu{
      width: 200px;
      li{
          padding:5px;
          background: #4cb4e7;
          color: #fff;
          border-bottom:1px solid #fff;
      
      }
      
  }
</style>
