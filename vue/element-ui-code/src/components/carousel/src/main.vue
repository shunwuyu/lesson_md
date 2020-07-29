<template>
  <div 
    :class="carouselClasses">
    <div class="el-carousel__container"
    :style="{height:height}">
      <slot></slot>
    </div>
    <ul 
      v-if="indicatorPosition !== 'none'"
      :class="indicatorsClasses">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'el-carousel__indicator',
          'el-carousel__indicator--' + direction,
          { 'is-active': index === activeIndex }]">
        <button class="el-carousel__button">
          <!-- <span v-if="hasLabel">{{ item.label }}</span> -->
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ElCarousel',
  props: {
    indicatorPosition: String,
    loop: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    carouselClasses() {
      const classes = ['el-carousel', 'el-carousel--' + this.direction];
      return classes;
    },
    indicatorsClasses() {
      const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];
      return classes;
    }
  },
  data() {
    return {
      items: [],
      activeIndex: -1,
      timer: null
    }
  },
  mounted() {
    this.updateItems();
    // console.log(this.items)
    // mvvm之后
    this.$nextTick(() => {
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTimer();
    });
  },
  methods: {
    pauseTimer () {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'ElCarouselItem');
    },
    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      // console.log('')
      this.timer = setInterval(this.playSlides, this.interval);
    },
    playSlides() {
      console.log('haha');
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },
    setActiveItem(index) {
      // console.log(index, this.activeIndex, '??')
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.');
        return;
      }
      let length = this.items.length;
      const oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }
      // if (index < 0) {
        // console.log(oldIndex === this.activeIndex)
      // if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      // }
    },
    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    }
  },
  watch: {
    items(val) {
      // console.log(this.initialIndex)
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },
    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
    }
  },
  beforeDestroy() {
    // if (this.$el)
    // console.log(this.$el);
    this.pauseTimer(); 
  }
}
</script>