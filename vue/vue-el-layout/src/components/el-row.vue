<script>
export default {
  data() {},
  render(h) {
    let obj =  h(
      'div',
      {},
      'render 函数'
    )
    console.log(obj);
    return obj;
    // return 'render 函数'
  }
}
</script>
<style scoped>
/* 3 1 */
/* 总：24 3/4 * 24 1/4 * 24 */
.el-row {
  width: 100%;
}
</style>