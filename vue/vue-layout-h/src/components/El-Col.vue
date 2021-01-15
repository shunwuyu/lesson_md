<script>
export default {
  props: {
    tag: { type: String, default: 'div' },
    span: { type: Number },
    offset: { type: Number }
  },
  render(h) {
    let parent = this.$parent;
    let jiange = parent.jiange;
    console.log(jiange);
    return h(
      this.tag,
      {
        class: ['el-col', 
        `el-col-span-${this.span}`,
        `el-col-offset-${this.offset}`
        ]
      },
      this.$slots.default
    )
  }
}
</script>
<style scoped lang="scss">
/* .el-row-span-1 {}
.el-row-span-4 {
  width: 4 / 24 * 100
}
.el-row-span-20 {
  
} */
@for $i from 0 through 24 {
  .el-col-span-#{$i} {
    flex: 0 0 (1 / 24 * $i * 100) * 1%;
  }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
</style>