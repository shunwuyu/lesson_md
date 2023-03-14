<template>
    <div class="kitty-icon">
        <svg class="icon" :style="iconColor" aria-hidden="true">
            <use :xlink:href="iconName"></use>
        </svg>
        <!-- <div v-if="dot" class="kitty-info" :class="styleDot">{{ badge }}</div> -->
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'



</script>

<style lang="stylus" scoped>
.icon {
  width: 1em;
  height: 1em;

  fill: currentColor;
  overflow: hidden;
}

.kitty-icon {
  display: inline-block;
  position: relative;
  vertical-align: -0.15em;

  .kitty-info {
    position: absolute;
    top: 8px;
    right: 0;
    box-sizing: border-box;
    min-width: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 16px;
    background-color: #ee0a24;
    transform: translate(50%, -50%);
  }

  .kitty-dot {
    width: 8px;
    min-width: 0;
    height: 8px;
    background-color: #ee0a24;
    border-radius: 100%;
  }
}
</style>