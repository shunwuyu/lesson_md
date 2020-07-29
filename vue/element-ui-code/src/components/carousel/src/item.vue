<template>
  <div
    class="el-carousel__item"
    v-show="ready"
    :class="{
      'is-active': active,
      'is-animating': animating
    }"
    :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElCarouselItem',
  data() {
    return {
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      animating: true

    }
  },
  computed: {
    itemStyle() {
      // console.log('-------');
      const translateType = this.parentDirection === 'vertical' ? 'translateY' : 'translateX';
      // console.log(translateType)
      const value = `${translateType}(${ this.translate }px) scale(${ this.scale })`;
      const style = {
        transform: value
      };
      return style
    },
    parentDirection() {
      return this.$parent.direction;
    },
  },
  methods: {
    translateItem(index, activeIndex, oldIndex) {
    // const parentType = this.$parent.type;
      // console.log(index, activeIndex, oldIndex)
      const parentDirection = this.parentDirection;
      const length = this.$parent.items.length;
      // console.log(parentDirection, length, '++++');
      this.active = index === activeIndex;
      const isVertical = parentDirection === 'vertical';
      this.translate = this.calcTranslate(index, activeIndex, isVertical);
      // console.log(this.active, '+++++')
      this.ready = true;
    },
    calcTranslate(index, activeIndex, isVertical){
      const distance = this.$parent.$el[isVertical ? 'offsetHeight' : 'offsetWidth'];
      return distance * (index - activeIndex);
    }
  },
  created() {
    this.$parent && this.$parent.updateItems();
  },
}
</script>

