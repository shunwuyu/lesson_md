<template>
    <span class="color-button">
      <button :class="[type, disabled?'disabled':'']" :disabled="disabled">
        <slot></slot>
      </button>
    </span>
  </template>
  
  <script>
  export default {
    name:'ComColorButton',
    props:{
        type:{
        type:String,
        default:'primary'
      },
        disabled:{
        type:Boolean,
        default:false
      },
    }, 
    data () {
      return {
  
      }
    }
  }
  </script>
  
  <style lang='styl'>
  $pColor = #333;
  $sColor = #0db677;
  $wColor = orange;
  $dColor = red;
  $disabledColor = gray;
  .color-button{
    display: inline-block;
    margin-right:10px;
    button{
      display: inline-block;
      padding:10px 20px;
      border:2px solid $pColor;
      background:#fff;
      font-size: 16px;
      width:auto;
      cursor: pointer;
      transition:all 0.5s;
      &:hover{
        box-shadow: 100px 0px 0px 0px $pColor inset;
        color:#fff;
      }
      &.success{
        border:2px solid $sColor;
        color: $sColor;
        &:hover{
          box-shadow: 100px 0px 0px 0px $sColor inset;
          color:#fff;
        }
      }
      &.warning{
        border:2px solid $wColor;
        color: $wColor;
        &:hover{
          box-shadow: 100px 0px 0px 0px $wColor inset;
          color:#fff;
        }
      }
      &.danger{
        border:2px solid $dColor;
        color: $dColor;
        &:hover{
          box-shadow: 100px 0px 0px 0px $dColor inset;
          color:#fff;
        }
      }
      &.disabled{
        border:2px solid $disabledColor;
        color: $disabledColor;
        cursor:not-allowed ;
        &:hover{
          box-shadow:none;
          color: $disabledColor;
        }
      }
    }
  }
  </style>
  
  