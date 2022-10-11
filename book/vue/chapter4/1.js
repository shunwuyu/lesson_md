{/* <template>
  <span class="demo" v-show="isShow">
    This is a span.
  </span>
</template> */}

class VNode {
  constructor (tag, data, children, text, elm) {
      /*当前节点的标签名*/
      this.tag = tag;
      /*当前节点的一些数据信息，比如props、attrs等数据*/
      this.data = data;
      /*当前节点的子节点，是一个数组*/
      this.children = children;
      /*当前节点的文本*/
      this.text = text;
      /*当前虚拟节点对应的真实dom节点*/
      this.elm = elm;
  }
}

function render() {
  return new VNode(
    'span',
    {
      staticClass: 'demo',
      directives: [
        {
          rawName: 'v-show',
          expression: 'isShow',
          name: 'show',
          value: true
        }
      ]
    },
    [
      {
        tag: undefined,
        data: undefined,
        text: 'This is a span.',
        children: undefined
      }
    ]
  )
}

function createEmptyVNode () {
  const node = new VNode();
  node.text = '';
  return node;
}

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

function cloneVNode (node) {
  const cloneVnode = new VNode(
      node.tag,
      node.data,
      node.children,
      node.text,
      node.elm
  );
  
  return cloneVnode;
}