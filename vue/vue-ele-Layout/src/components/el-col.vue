<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    span: {
      type: Number
    },
    offset: {
      type: Number,
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      // while (parent && parent.$options.componentName !== "ElRow") {
      //   parent = parent.$parent;
      // }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    classList.push(`el-col-${this.span}`);
    classList.push(`el-col-offset-${this.offset}`);
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + "px";
      style.paddingRight = style.paddingLeft;
    }

    return h(
      this.tag,
      {
        class: ["el-col", classList],
        style
      },
      this.$slots.default
    );
  }
};
</script>
<style scoped lang="scss">
@for $i from 0 through 24 {
  .el-col-#{$i} {
    flex: 0 0 (1 / 24 * $i * 100) * 1%;
  }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
</style>