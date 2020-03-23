<template>
<transition name="el-fade-in">
  <div 
    v-if="visible"
    @click.stop="handleClick"
    :style="{
      'right': styleRight,
      'bottom': styleBottom
    }"  
    class="el-backtop"
  >
    <i class="el-icon-caret-top"></i>
  </div>
</transition>
</template>
<script>
import _ from 'lodash';
export default {
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: [String],
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      el: null,
      container: null,
      visible: false
    }
  },
  computed: {
    styleBottom() {
      return `${this.bottom}px`;
    },
    styleRight() {
      return `${this.right}px`;
    }
  },
  methods: {
    handleClick(e) {
      this.scrollToTop();
      this.$emit('click', e);
    },
    scrollToTop() {
      let el = this.el;
      let step = 0;
      let interval = setInterval(() => {
        if (el.scrollTop <= 0) {
          clearInterval(interval);
          return;
        }
        step += 10;
        el.scrollTop -= step;
      }, 20);
    },
    init() {
      this.container = document;
      this.el = document.documentElement;
    },
    onScroll() {
      // console.log('------------');
      const scrollTop = this.el.scrollTop;
      // console.log(scrollTop);
      this.visible = scrollTop >= this.visibilityHeight;
    },
    beforeDestroy() {
      this.container.removeEventListener('scroll', this.throttledScrollHandler);
    }
  },
  mounted() {
    this.init();
    this.throttledScrollHandler = _.throttle(this.onScroll, 300);
    this.container.addEventListener('scroll', this.throttledScrollHandler);
  }
}
</script>