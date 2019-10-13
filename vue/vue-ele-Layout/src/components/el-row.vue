<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gutter: {
      type: Number
    }
  },
  computed: {
    style() {
      const ret = {};
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: ["el-row"],
        style: this.style
      },
      this.$slots.default
    );
  }
};
</script>
<style scoped>
.el-row {
  width: 100%;
  display: flex;
}
</style>