class Compile {
  constructor(el, vm) {
    console.log(el,'--------');
      this.el = this.isElementNode(el) ? el : document.querySelector(el);
      this.vm = vm;

      // 如过传入的根元素存在，才开始编译
      if (this.el) {
          // 1、把这些真实的 Dom 移动到内存中，即 fragment（文档碎片）
          let fragment = this.node2fragment(this.el);
      }
  }

  /* 辅助方法 */
  // 判断是否是元素节点
  isElementNode(node) {
      return node.nodeType === 1;
  }

  /* 核心方法 */
  // 将根节点转移至文档碎片
  node2fragment(el) {
      // 创建文档碎片
      let fragment = document.createDocumentFragment();
      // 第一个子节点
      let firstChild;

      // 循环取出根节点中的节点并放入文档碎片中
      while (firstChild = el.firstChild) {
          fragment.appendChild(firstChild);
      }
      return fragment;
  }
}